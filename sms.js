const SessionRepo = require('./sessionRepository');
const EventRepo = require('./eventRepository');

class Sms {
    constructor(){
        this.sessionRepo = new SessionRepo();
        this.eventRepo = new EventRepo();
    }

    handleSession(phoneNumber){
        let self = this;
        return this.sessionRepo.findByPhoneNumber(phoneNumber)
                        .then(s => {   
                            console.log(s);
                            return self.eventRepo.insertEvent(s.id, "test")}
                        );

    }
}

module.exports = Sms;