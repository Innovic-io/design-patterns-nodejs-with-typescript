const util = require('util')
const EventEmitter = require('events').EventEmitter

function Observable () {
  EventEmitter.call(this)
}

util.inherits(Observable, EventEmitter)

Observable.prototype.next = function (data) {
  this.emit('data', data)
}

module.exports = Observable
