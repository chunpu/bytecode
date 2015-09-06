var getBytes = require('./')
var assert = require('assert')

describe('getBytes', function() {
	it('simple', function() {
		assert.deepEqual(getBytes('abc'), [97, 98, 99])
	})

	it('other unicode', function() {
		assert.deepEqual(getBytes('中文'), [228, 184, 173, 230, 150, 135])
	})
})
