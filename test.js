let getMemberCount = require('./')

describe('getMemberCount', function() {
	it('throws for invalid groups', function(done) {
		expectAsync(getMemberCount(-1)).toBeRejected().then(done, done.fail)
	})
	it('returns a valid member count', function(done) {
		getMemberCount(1).then(function(count) {
			expect(count).toBeGreaterThan(0)
			done()
		}, done.fail)
	})
	it('accepts BigInt (if supported) and string group ids', function(done) {
		let promises = []
		if (BigInt !== undefined)
			promises.push(expectAsync(getMemberCount(1n)).toBeResolved())
		promises.push(expectAsync(getMemberCount('1')).toBeResolved())
		Promise.all(promises).then(done, done.fail)
	})
})
