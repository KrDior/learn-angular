# Directive

## Attribute directive

- NgClass—adds and removes a set of CSS classes.
- NgStyle—adds and removes a set of HTML styles.
- NgModel—adds two-way data binding to an HTML form element.

To prevent expression evaluation in the browser, add ngNonBindable to the host element. ngNonBindable deactivates interpolation, directives, and binding in templates.
<p>Use ngNonBindable to stop evaluation.</p>
<p ngNonBindable>This should not evaluate: {{ 1 + 1 }}</p>
***

## ngModel

<input [ngModel]="currentItem.name" (ngModelChange)="setUppercaseName($event)" id="example-uppercase">

The NgModel directive works for an element supported by a ControlValueAccessor. Angular provides value accessors for all of the basic HTML form elements.
***

## Structural directive

- NgIf—conditionally creates or disposes of subviews from the template.
- NgFor—repeat a node for each item in a list.
- NgSwitch—a set of directives that switch among alternative views.

NgIf—conditionally creates or disposes of subviews from the template.
NgFor—repeat a node for each item in a list.
NgSwitch—a set of directives that switch among alternative views.

<div *ngFor="let item of items; trackBy: trackByItems">
  ({{item.id}}) {{item.name}}
</div>

`trackByItems(index: number, item: Item): number { return item.id; }`
