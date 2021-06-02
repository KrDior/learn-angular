# Template

## Pipe

By default, pipes are defined as pure so that Angular executes the pipe only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object).

## Attribute binding

`<p [attr.attribute-you-are-targeting]="expression"></p>`
Remember, use @Input() when you want to keep track of the attribute value and update the associated property. Use @Attribute() when you want to inject the value of an HTML attribute to a component or directive constructor.

***

## Template variables

`
<form #itemForm="ngForm" (ngSubmit)="onSubmit(itemForm)">
  <label for="name">Name <input class="form-control" name="name" ngModel required />
  </label>
  <button type="submit">Submit</button>
</form>

<div [hidden]="!itemForm.form.valid">
  <p>{{ submitMessage }}</p>
</div>
`
With NgForm, itemForm is a reference to the NgForm directive with the ability to track the value and validity of every control in the form. Without NgForm the reference to the Component.
The NgForm form property allows you to disable the submit button if the itemForm.form.valid is invalid because of you have a reference to Directive.
***
