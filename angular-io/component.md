# Component

## Live cycle hooks

`ngOnChanges()` Note that if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().

`ngDoCheck()` This hook is called with enormous frequency—after every change detection cycle no matter where the change occurred. It's called over twenty times in this example before the user can do anything.

`ngOnChanges:` When an input/output binding value changes.
`ngOnInit:` After the first ngOnChanges.
`ngDoCheck:` Developer's custom change detection.
`ngAfterContentInit:` After component content initialized.
`ngAfterContentChecked:` After every check of component content.
`ngAfterViewInit:` After a component's views are initialized.
`ngAfterViewChecked:` After every check of a component's views.
`ngOnDestroy:` Just before the directive is destroyed.

***

## View encapsulation

- ShadowDom
- Emulated view encapsulation (the default)
- None means that Angular does no view encapsulation.

***

## Parent child communication

- in parent component use template reference value `<app-child #childLink></app-child>`;
- both can use Service;
- child with @Input/@Output;
- child with EventEmitter;
- two-way data binding [()] `<app-sizer [(size)]="fontSizePx"></app-sizer>`

***

## Component styles

- `:host()`;
- `:host-context(.theme-light) h2`; The following example applies a background-color style to all <h2> elements inside the component, only if some ancestor element has the CSS class theme-light.
- `::ng-deep` deprecated!

***
## Content projection

- Single-slot `<ng-content></ng-content>`;
- Multi-slot `<ng-content select="[question]"></ng-content>`;
- Conditional content projection `ng-template`;
***

## Dynamic component

`
const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component); // dynamic component

const viewContainerRef = this.adHost.viewContainerRef; // reference to ViewContainer via `adHost` selector of directive
viewContainerRef.clear(); // remove previous dynamic component

const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory); // add the component to the template,
componentRef.instance.data = adItem.data // put data to new created component
`
***

## Angular custom elements

typing: `const aDialog = document.createElement('my-dialog') as NgElement & WithProperties<{content: string}>;`

or `declare global {
  interface HTMLElementTagNameMap {
    'my-dialog': NgElement & WithProperties<{content: string}>;
    'my-other-element': NgElement & WithProperties<{foo: 'bar'}>;
    ...
  }
}`
