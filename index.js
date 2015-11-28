module.exports = function (codePoint) {
  var i = -1
  while (++i < blocks.length) {
    var block = blocks[i]
    if (block.start <= codePoint && block.end >= codePoint) {
      return block
    }
  }
}

var fs = require('fs')
var defs = fs.readFileSync(__dirname + '/Blocks.txt', 'utf8')
var blocks = defs.split('\n').filter(function (line) {
  return line !== '' && line[0] !== '#'
}).map(function (line) {
  var parts = line.split('; ')
  var range = parts[0].split('..')
  return {
    name: parts[1],
    start: parseInt(range[0], 16),
    end: parseInt(range[1], 16)
  }
})
