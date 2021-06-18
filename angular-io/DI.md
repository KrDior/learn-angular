# Dependency injection

Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.

`[{ provide: Logger, useClass: Logger }]`

The provider-definition key can be `useClass`, as in the example. It can also be `useExisting, useValue, or useFactory`


[ NewLogger,
  { provide: OldLogger, useExisting: NewLogger}
]
Be sure you don't alias `OldLogger` to `NewLogger` with `useClass`, as this creates two different `NewLogger` instances.
***

## InjectionToken

Use an InjectionToken whenever the type you are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type, array or parameterized type.

class MyService {
  constructor(readonly myDep: MyDep) {}
}

const MY_SERVICE_TOKEN = new InjectionToken<MyService>('Manually constructed MyService', {
  providedIn: 'root',
  factory: () => new MyService(inject(MyDep)),
});

const instance = injector.get(MY_SERVICE_TOKEN);
expect(instance instanceof MyService).toBeTruthy();
expect(instance.myDep instanceof MyDep).toBeTruthy();
