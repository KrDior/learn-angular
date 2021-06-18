# Routing and navigation

# Lazy loading

# Route guards

- CanActivate
- CanActivateChild
- CanDeactivate
- Resolve
- CanLoad

The router supports both styles with two `LocationStrategy` providers:

`PathLocationStrategy` — the default "HTML5 pushState" style.
`HashLocationStrategy` — the "hash URL" style.

The `forRoot()` method ensures that your application only instantiates one RouterModule
* service is shared between eagerly loaded modules and lazy loaded modules.

By default, the router re-uses a component instance when it re-navigates to the same component type without visiting a different component first. The route parameters could change each time.

1) `heroList` to `heroList\1` then `heroList\2` Component `DetailHero` will be re-used
2) `heroList` to `heroList\1` then `heroList` after that to `heroList\2` Component `DetailHero` will be create again

*snapshot: the no-observable alternative

***

RouterModule.forRoot(
  appRoutes,
  {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules
  }
)

The `PreloadAllModules` strategy does not load feature areas protected by a `CanLoad` guard.
