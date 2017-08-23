// Singleton pattern
console.log('----- SINGLETON -----')
const singletonInstance = require('./repository/singleton')

console.log('Instance 1 ', singletonInstance)

function inFunction () {
  const singletonInstance2 = require('./repository/singleton')
  console.log('Instance 2 ', singletonInstance2)
}

inFunction()

// singletonInstance and singletonInstance2 should have same dates
// because of behavior of nodejs require module

// Observable pattern
console.log('----- OBSERVABLE -----')
const Observer = require('./repository/observer')
const observable = new Observer()

observable.on('data', (name) => {
  console.log(name)
})

observable.next('Hello')

// Dependency Injection
console.log('----- DEPENDENCY INJECTION -----')

const serviceObservable = new Observer()

const MyService = require('./repository/dependencyInjection')(serviceObservable)

console.log()
MyService.init()

serviceObservable.next('Hello again')

// Middleware pattern
console.log('----- MIDDLEWARE PATTERN -----')
const AppService = require('./repository/middleware')
const app = new AppService()

app.use((next) => {
  console.log('first middleware')
  next()
})

app.use((next) => {
  console.log('second middleware')
  next()
})

app.go(() => {
  console.log('start app')
})
// const app = AppService()
