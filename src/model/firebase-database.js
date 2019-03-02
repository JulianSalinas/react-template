const firebase = require("firebase/app");
const config = require('../json/fireconfig');

require("firebase/auth");
require("firebase/database");
firebase.initializeApp(config);


export default class FirebaseDatabase {

    static READ = "read";
    static UPDATE = "update";
    static DELETE = "delete";

    constructor(){
        this.database = firebase.database().ref("edepa6");
    }

    createEvent(event){
        this.database.child("schedule").push().set(event)
            .then(() => console.log("Event created!"))
            .catch(() => console.log("Error creating event!"));
    }

    synchEvents(receive){
        const reference = this.database.child("schedule");
        const callback = action => this.createSynchCallback(action, receive);
        reference.on("child_added", callback(FirebaseDatabase.READ));
        reference.on("child_changed", callback(FirebaseDatabase.UPDATE));
        reference.on("child_removed", callback(FirebaseDatabase.DELETE));
    }

    updateEvent(key, event){
        this.database.child("schedule").child(key).set(event)
            .then(() => console.log("Event updated!"))
            .catch(() => console.log("Error updating event!"));
    }

    deleteEvent(key){
        this.database.child("schedule").child(key).remove()
            .then(() => console.log("Event deleted!"))
            .catch(() => console.log("Error deleting event!"));
    }

    synchPeople(receive){
        const reference = this.database.child("people");
        const callback = action => this.createSynchCallback(action, receive);
        reference.on("child_added", callback(FirebaseDatabase.READ));
        reference.on("child_changed", callback(FirebaseDatabase.UPDATE));
        reference.on("child_removed", callback(FirebaseDatabase.DELETE));
    }

    /**
     * @param {string} action, it could be READ, UPDATE, DELETE
     * @param {function} receive, function from the controller to receive the data back
     * @returns {function({ key, val }): * }
     */
    createSynchCallback(action, receive){
        return snapshot => receive(snapshot.key, snapshot.val(), action);
    }

    /**
     * Must be called when exit from the app
     */
    closeConnection(){
        this.database.child("people").off();
        this.database.child("schedule").off();
    }

}