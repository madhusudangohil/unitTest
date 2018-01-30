class EventRepository {
    constructor(){

    }
    insertEvent(sessionId, event){
        let promise = new Promise(function(resolve, reject){
            if(sessionId < 1000) {
                setTimeout(function() {
                    resolve(1);    
                }, 3000);
                
            }else{
                reject("error inserting event");
            }
        });
        return promise;
    }
}

module.exports  = EventRepository;