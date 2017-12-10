function MyService (observer) {
  const obs = observer

  return {
    init: () => {
      obs.on('data', (name) => {
        console.log(name)
      })
    }
  }
}

module.exports = MyService

