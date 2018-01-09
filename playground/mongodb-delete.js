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
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });

    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID("5a52c306bfed54cf6638061e")
    }).then((result) => {
        console.log(result);
    });
//
	db.close();
});
//1BKEsdGhRyw2GnwJb4ZhNrtzM9M9w4S7Hf
