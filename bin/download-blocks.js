#!/usr/bin/env node

var fs = require('fs')
var request = require('hyperquest')

var req = request('http://unicode.org/Public/UNIDATA/Blocks.txt')
var res = ''
req.on('data', function (d) { res += d })
req.on('end', function () {
  var blocks = res.split('\n').filter(function (line) {
    return line !== '' && line[0] !== '#'
  }).map(function (line) {
    return line
      .replace('..', ';')
      .replace('; ', ';')
  }).join('\n')
  fs.writeFileSync(__dirname + '/../Blocks.txt', blocks)
})
