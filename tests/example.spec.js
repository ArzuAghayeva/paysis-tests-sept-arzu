import {expect} from "chai"

describe('Operation with numbers', function () {
    const a = 5
    const b = 7

    it('should add numbers', function () {
        expect(a + b).to.eq(12)
})

    it('should subtract numbers', function () {
        expect(a - b).to.eq(-2)
    })
})


