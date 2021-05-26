## 1) Shared module

shared/shared.module.ts

## 2) ContentChild, ViewChild, ContentChildren with abstract base Class, ng-content

app.component.html
item.component.ts

## 3) Structure directive
`delay`
app.component.html
delay.directive.ts

## 3) Directive: exportAs, HostBinding
`colory`
item.component.html
colory.directive.ts

## 4) Pure pipe
item.component.html
reverse.pipe.ts

## 5) ng-content, ng-container, ngTemplateOutlet, ngComponentOutlet, ComponentFactoryResolver, @Attribute
## lazy-loading

app.component.html
item.component.ts
item.component.html

## 6) Virtual-scroll
teams.component.html
teams.component.ts

## 7) Angular element

app.module.ts
ang-element.component.html
ang-element.component.ts


## 8) Dependency injection
Service:
`
@Injectable({
  providedIn: 'root', 'any', 'platform'
})
constructor(
  @Optional @Self someService: ServiceType;
  @Optional @SkipSelf someService: ServiceType;
) {}
`

Component:
`
@Component({
  selector: 'app-ang-element',
  templateUrl: './ang-element.component.html',
  styleUrls: ['./ang-element.component.scss'],
  viewProviders: [SomeService]
})
export class AngElementComponent implements OnInit {}
`

Module:
`
providers: [ {provide: SomeService, useClass | useValue | useExisting: SomeClass],
`

## 9) Router Animation
animation
app.component.ts

## 9) Routing Lazy module loading
app-routeing.module.ts
lazy.module.ts
mypreloading.service.ts


## 10) webWorker
my-worker.worker.ts
app.component.ts
