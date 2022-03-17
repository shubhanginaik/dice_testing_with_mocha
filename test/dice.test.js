'use strict';

const expect = require('chai').expect;

const Dice = require('../dice');

describe('methods defined', function(){
    const dice = new Dice();

    it('getter maximumValue defined', function(){
        expect(dice).to.have.a.property('maximumValue')
    });
    it('method roll defined', function(){
        expect(dice).to.have.a.property('roll')
    })
})

describe('create dice with no upperbound given', function(){
    const dice = new Dice();
    it('maximumValue is 6', function(){
        expect(dice.maximumValue).to.equal(6)
    })
});

// describe('create dice with given upper bound 2-20', function(){
//     const testCases = new Array(19).fill(2).map((value,ind)=> value+ind) // check demo.js

//     testCases.forEach(function(){
//         it(`upper bound is ${uBound}`, function(){
//             const dice = new Dice(uBound);
//             expect(dice.maximumValue).to.equal(uBound);
//         })
//     })
// })

describe('create dice with given upper bound 2-20 version 2', function(){
    function testUpperBound(upperBound){
        const dice=new Dice(upperBound);
        it(`upper bound is ${upperBound}`, function(){
            expect(dice.maximumValue).to.equal(upperBound);
        })
    } //end of testUpperBound

        for(let uBound=2; uBound<=20; uBound++){
            testUpperBound(uBound)
        }
    
})

describe('test roll', function(){
    let dice;

    beforeEach(function(){
        dice=new Dice();
    });
    it('test when rolled', function(){
        dice.roll();
        expect(dice.dots).to.be.within(1,6);
    });

    it('test when not rolled yest', function(){
        expect(dice.dots).to.equal(0);
    });
});

describe('test toString', function(){
    let dice;
    beforeEach(function(){
        dice=new Dice();
    });

    it('testing dice is rolled', function(){
        dice.roll();
        expect(dice.toString()).to.equal(`${dice.dots}`);
    });
    
    it('dice not rolled yet', function(){
        expect(dice.toString()).to.equal('Not rolled yet');
    });
})