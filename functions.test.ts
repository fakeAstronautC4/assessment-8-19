const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('contains a robot', () => {
        let arry = shuffleArray
        expect(arry).toContain('Globotron')
    }),
    // trying to see if it even works... 
    it('length of the array', () => {
        let arry = shuffleArray
        expect(arry).toEqual(shuffleArray)
    })
})