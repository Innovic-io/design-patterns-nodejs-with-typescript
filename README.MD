[![Build Status](https://travis-ci.org/Innovic-io/design-patterns-nodejs-with-typescript.svg?branch=master)](https://travis-ci.org/Innovic-io/design-patterns-nodejs-with-typescript)

# Design patterns in NodeJS with TypeScript

Unit tested with Jest.

## Install

```bash
npm install
```

## Run

```bash
npm test
```

## Creational

- [Factory](src/creational/factory.ts) - [test](src/creational/factory.spec.ts)
- [Builder](src/creational/builder.ts) - [test](src/creational/builder.spec.ts)
- [Singleton](src/creational/singleton.ts) - [test](src/creational/singleton.spec.ts)
- [Strategy](src/behavioral/strategy/strategy.ts) - [test](src/behavioral/strategy/strategy.spec.ts)

## Behavioral

- [Command Pattern](src/behavioral/command.ts) - [test](src/behavioral/command.spec.ts)
- [Observer](src/behavioral/observer.ts) - [test](src/behavioral/observer.spec.ts) 
- [Chain Of Responsibility](src/behavioral/chain_of_responsibility.ts) [test](src/behavioral/chain_of_responsibility.spec.ts)

## Structural

- [Facade](src/structural/facade/facade.ts) - [test](src/structural/facade/facade.spec.ts)
- [Adapter](src/structural/adapter/adapter.ts) - [test](src/structural/adapter/adapter.spec.ts)

## ToFix

- Dependency Injection
- Middleware ( ToDo )
- Singleton

## Readings

- https://en.wikipedia.org/wiki/Software_design_pattern
