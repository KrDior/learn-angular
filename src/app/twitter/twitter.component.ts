import { ChangeDetectorRef, QueryList } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { combineLatest } from 'rxjs';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { GitUsersService, User } from '../git-users.service';



@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('refreshBtn', { read: ElementRef }) refreshBtn: ElementRef;
  @ViewChild('suggestionClose1') suggestionClose1: ElementRef;
  @ViewChildren('closeBtn', { read: ElementRef }) closeButtons!: QueryList<ElementRef>;

  public userSubscriptions = [];
  public removedId = 0;
  public cards: User[] = [];

  private refreshClickStream$: Observable<Event>;
  private responseStream$: Observable<User[]>;
  private valueOfCards = 3;
  private closeButtonsStreams$ = [];

  constructor(
    private gitUserService: GitUsersService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
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
    const closeBtnSub = this.closeButtons.changes.subscribe((closeButtons) => {
      closeButtons.toArray().forEach(btn => {
        this.closeButtonsStreams$.push(fromEvent(btn.nativeElement, 'click'));
      });
      this.runSubscriptionProcess();
      closeBtnSub.unsubscribe();
    });

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
    console.log(suggestedUser, cardOrder)
    this.cards[cardOrder] = suggestedUser;
  }

  onCardClose(id: number): void {
    this.removedId = id;
  }
}
