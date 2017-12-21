//This is just a "sample test" pulled directly from the Chai website. So... it's not actually testing anything :) But you will still feel good when you see those green check marks... 

'use strict';

const chai = require('chai');

const expect = require('chai').expect,
    foo = 'bar',
    beverages = { tea: ['chai', 'matcha', 'oolong', 'kombucha'] };

const testFunc = param => {
    return parseInt(param) + 5;
};

describe('Sample Test', function() {
    it('should be a number', function() {
        chai.assert.equal(typeof(testFunc(2)), 'number');
    });
});

describe('FOO', () => {
    it('should be a string', () => {
        expect(foo).to.be.a('string');
    });
    it('should equal bar', () => {
        expect(foo).to.equal('bar');
    });
    it('should have a length of 3', () => {
        expect(foo).to.have.lengthOf(3);
    });
});
describe('BEVERAGES', () => {
    it('should definitely include tea with four options', () => {
        expect(beverages).to.have.property('tea').with.lengthOf(4);
    });
});