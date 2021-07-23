import { ChangeDetectorRef, QueryList } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { combineLatest } from 'rxjs';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { GitUsersService, User } from '../git-users.service';

const DEFAULT_CARDS_VALUE = 3;
@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('refreshBtn', { read: ElementRef }) refreshBtn: ElementRef;
  @ViewChildren('closeBtn', { read: ElementRef }) closeButtons!: QueryList<ElementRef>;
  @ViewChildren('cardEl', { read: ElementRef }) cardsElements!: QueryList<ElementRef>;

  public userSubscriptions = [];
  public cards: User[] = [];
  public closeBtnIterator = [];

  private valueOfCards = DEFAULT_CARDS_VALUE;
  private refreshClickStream$: Observable<Event>;
  private responseStream$: Observable<User[]>;
  private closeButtonsStreams$ = [];

  constructor(
    private gitUserService: GitUsersService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.closeBtnIterator = Array(this.valueOfCards);
  }

  ngAfterViewInit(): void {
    this.refreshBtnClick();
    this.handleUserService();
    this.createEmptyCards();
    this.handleCloseButtonsSubscriptions();
    this.refreshClickStream$ = fromEvent(this.refreshBtn.nativeElement, 'click');
  }

  ngOnDestroy(): void {
    this.userSubscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private createEmptyCards(): void {
    this.cards.length = this.valueOfCards;
  }

  private handleCloseButtonsSubscriptions(): void {
    this.closeButtons.toArray().forEach(btn => {
      this.closeButtonsStreams$.push(fromEvent(btn.nativeElement, 'click'));
    });
    this.runSubscriptionProcess();

  }

  private runSubscriptionProcess(): void {
    this.fillUserSubscriptions();
    this.handleUserSubscription();
  }

  private handleUserService(): void {
    this.responseStream$ = this.gitUserService.getUsers(this.refreshClickStream$);
  }

  private fillUserSubscriptions(): void {
    this.closeButtonsStreams$.forEach(closeClickStream => {
      this.userSubscriptions.push(this.createSuggestionStream(closeClickStream));
    });
  }

  private refreshBtnClick(): void {
    this.refreshClickStream$ = fromEvent(this.refreshBtn.nativeElement, 'click');
  }

  private createSuggestionStream(closeClickStream: Observable<Event>): Observable<User> {
    return combineLatest([
      closeClickStream.pipe(
        startWith('startUp click')
      ),
      this.responseStream$,
      ]).pipe(
        map(([click, listUsers]) => this.getRandomUser(listUsers))
    );
  }

  private handleUserSubscription(): void {
    this.userSubscriptions.forEach((subscription, ind) => {
      subscription.subscribe(suggestedUser => {
        this.setUserCard(suggestedUser, ind);
      });
    });
  }

  private getRandomUser(listUsers: User[]): User {
    return listUsers[Math.floor(Math.random() * listUsers.length)];
  }

  private setUserCard(suggestedUser: User, cardOrder): void {
    this.cards[cardOrder] = suggestedUser;
  }
}
