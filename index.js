// decode or encode **utf8 byte code** rather than char code

// https://github.com/arahaya/utf8.js/blob/master/utf8.js

var _ = require('min-util')
var InvalidCharacterError = 'InvalidCharacterError'

exports.decode = function(str) {
	// copy from http://stackoverflow.com/questions/12518830/java-string-getbytesutf8-javascript-analog
	str = _.tostr(str)
	var charCode
	var byteCodes = []

	for (var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i)
		if (charCode < 0x80) {
			byteCodes.push(charCode)
		} else if (charCode < 0x800) {
			byteCodes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f))
		} else if (charCode < 0xd800 || charCode >= 0xe000) {
			byteCodes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f))
		} else {
			// let's keep things simple and only handle chars up to U+FFFF...
			byteCodes.push(0xef, 0xbf, 0xbd) // U+FFFE 'replacement character'
		}
	}

	return byteCodes
}

exports.encode = function(byteCodes) {
	// http://www.oschina.net/code/snippet_121125_19984 but it is wrong
	var arr = []
	var byteCode = 0
	var charCode = 0

	for (var i = 0; i < byteCodes.length; i++) {
		byteCode = byteCodes[i]
		if (byteCode > 0xe0) { // 224
			charCode = (byteCode & 0x0f) << 12
			byteCode = byteCodes[++i]
			charCode |= (byteCode & 0x3f) <<  6
			byteCode = byteCodes[++i]
			charCode |= byteCode & 0x3f
		} else if (byteCode > 0xc0) { // 192
			charCode = (byteCode & 0x1f) << 6
			byteCode = byteCodes[++i]
			charCode |= (byteCode & 0x3f) << 6
		} else if (byteCode > 0x80) { // 128
			throw new Error(InvalidCharacterError)
		} else { // 0-128
			charCode = byteCode
		}
		arr.push(String.fromCharCode(charCode))
	}

	return arr.join('')
}
