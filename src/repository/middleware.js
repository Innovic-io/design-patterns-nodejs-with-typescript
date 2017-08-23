function AppService () {}

AppService.prototype.use = (fn) => {
  /*
  const self = this

  this.go = ((stack) => {
    console.log(stack)

    return (next) => {
      stack.call(self, () => {
        fn.call(self, next.bind(self))
      })
    }
  })(this.go)
  */
}

AppService.prototype.go = (next) => {
  next()
}

module.exports = AppService
