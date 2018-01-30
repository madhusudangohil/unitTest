const expect = require('chai').expect;
const sms = new(require('../sms'))();
const sinon = require('sinon');
const sessionRepository = require('../sessionRepository');
const eventRepository = require('../eventRepository');

describe("Sms", function(){
    describe("handleSession", function(){        
        it("should invoke mock session repo and event repo methods", function(){

            let sessionMock = sinon.mock(sessionRepository.prototype);
            sessionMock.expects("findByPhoneNumber")
                       .once()
                       .withArgs("1112223333")
                       .returns(Promise.resolve({id:100, name:'mockClient'}));

            let eventMock = sinon.mock(eventRepository.prototype);
            eventMock.expects("insertEvent")
                       .once()
                       .withArgs(100,sinon.match.any)
                       .returns(Promise.resolve(1));           

            return sms.handleSession('1112223333')
                            .then(r => {
                                eventMock.verify();
                                sessionMock.verify();
                                eventMock.restore();
                                sessionMock.restore();
                                expect(r).to.be.equal(1);
                            });

        });

        it("should invoke session repo and event repo methods", function(){
            this.timeout(7000);
            return sms.handleSession('3097501417')
                            .then(r => {
                                expect(r).to.be.equal(1);                                
                            });

        });

    });
});