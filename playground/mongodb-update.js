// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let id = new ObjectID();
console.log(id);

const callbackError = (err, result) => {
	if (err) {
		return console.log('Unable to insert', err);
	}
	console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
};
MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a52e879bfed54cf66380640")
    // }, {
    //     $set: {
    //         text:'@dexfs',
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a527f44418e0ccffb161168")
    }, {
        $set: {
            name:'André Santos',
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false 
    }).then((result) => {
        console.log(result);
    });
//
	db.close();
});
//1BKEsdGhRyw2GnwJb4ZhNrtzM9M9w4S7Hf
