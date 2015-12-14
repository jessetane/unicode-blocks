var fs = require('fs')
var defs = fs.readFileSync(__dirname + '/Blocks.txt', 'utf8')

var blocks = defs.split('\n').map(function (line) {
  var parts = line.split(';')
  return {
    start: parseInt(parts[0], 16),
    end: parseInt(parts[1], 16),
    name: parts[2]
  }
})

var end = blocks[blocks.length - 1].end

module.exports = blocks

blocks.fromCodePoint = function (codePoint) {
  if (codePoint < 0 || codePoint > end) return
  var i = -1
  while (++i < blocks.length) {
    var block = blocks[i]
    if (codePoint <= block.end) {
      return block
    }
  }
}
