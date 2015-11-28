var tape = require('tape')
var blockFromCodePoint = require('./')

tape('it works', function (t) {
  t.plan(1)

  var block = blockFromCodePoint(0xF0100)
  t.deepEqual(block, {
    name: 'Supplementary Private Use Area-A',
    start: 0xF0000,
    end: 0xFFFFF
  })
})
