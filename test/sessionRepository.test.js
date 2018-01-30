const expect = require('chai').expect;
const sessionRepository = new(require('../sessionRepository'))();

describe("sessionRepository", function(){
    describe("findByPhoneNumber", function(){
        it("should return session object when phone number is 3097501417", function(){
            sessionRepository.findByPhoneNumber('3097501417')
                            .then(r => {expect(r).to.be.an('object');})

        });
        it("should return session object when phone number is not 3097501417", function(){
            sessionRepository.findByPhoneNumber('6144489143')
                            .catch(e => { console.log(e); expect(e).to.equal('not found');})

        });
    });
});