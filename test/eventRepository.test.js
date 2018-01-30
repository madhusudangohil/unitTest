const expect = require('chai').expect;
const eventRepository = new(require('../eventRepository'))();

describe("eventRepository", function(){
    describe("insertEvent", function(){
        it("should return 1 when session id is less than 1000", function(){
            eventRepository.insertEvent(1,'test event')
                            .then(r => {expect(r).to.be.equal(1);})

        });
        it("should return throw error when session id is greater than 1001", function(){
            eventRepository.insertEvent(1001,'test event')
                            .catch(e => {expect(e).to.be.equal('error inserting event');})

        });
    });
});