#!/usr/bin/env node

var fs = require('fs')
var request = require('hyperquest')

request('http://unicode.org/Public/UNIDATA/Blocks.txt')
  .pipe(fs.createWriteStream(__dirname + '/../Blocks.txt'))
