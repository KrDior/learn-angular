## Module

- `declarations`: The components, directives, and pipes that belong to this NgModule.

- `exports`: The subset of declarations that should be visible and usable in the component templates of other NgModules.

- `imports`: Other modules whose exported classes are needed by component templates declared in this NgModule.

- `providers`: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the application. (You can also specify providers at the component level.)

- `bootstrap`: The main application view, called the root component, which hosts all other application views. Only the root NgModule should set the bootstrap property.
