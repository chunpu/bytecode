var byteCode = require('./')
var assert = require('assert')

describe('decode', function() {
	it('simple', function() {
		assert.deepEqual(byteCode.decode('abc'), [97, 98, 99])
	})

	it('other unicode', function() {
		assert.deepEqual(byteCode.decode('中文'), [228, 184, 173, 230, 150, 135])
	})
})

describe('encode', function() {
	it('simple', function() {
		assert.deepEqual(byteCode.encode([97, 98, 99]), 'abc')
	})

	it('other unicode', function() {
		assert.deepEqual(byteCode.encode([228, 184, 173, 230, 150, 135]), '中文')
	})

	it('complex', function() {
		var str = ' 12中文 abc のxx '
		assert.deepEqual(byteCode.encode(byteCode.decode(str)), str)
	})
})
