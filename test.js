var tape = require('tape')
var blockFromCodePoint = require('./').fromCodePoint

tape('get first block', function (t) {
  t.plan(2)
  t.deepEqual(blockFromCodePoint(0), {
    name: 'Basic Latin',
    start: 0x0000,
    end: 0x007F
  })
  t.deepEqual(blockFromCodePoint(0x7F), {
    name: 'Basic Latin',
    start: 0x0000,
    end: 0x007F
  })
})

tape('get last block', function (t) {
  t.plan(2)
  t.deepEqual(blockFromCodePoint(0x100000), {
    name: 'Supplementary Private Use Area-B',
    start: 0x100000,
    end: 0x10FFFF
  })
  t.deepEqual(blockFromCodePoint(0x10FFFF), {
    name: 'Supplementary Private Use Area-B',
    start: 0x100000,
    end: 0x10FFFF
  })
})

tape('get non-unicode code points', function (t) {
  t.plan(2)
  t.equal(blockFromCodePoint(-1), undefined)
  t.equal(blockFromCodePoint(0x110000), undefined)
})

tape('get the fire engine\'s block', function (t) {
  t.plan(1)
  t.deepEqual(blockFromCodePoint(0x1F692), {
    name: 'Transport and Map Symbols',
    start: 0x1F680,
    end: 0x1F6FF
  })
})
