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
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

    // const c = db.collections()
    // .then(result => {
    //     result.forEach(c => {
    //         let collection  = db.collection(c['collectionName']); 
    //         console.log(collection.find({}));
    //     });
    // }).catch(err => console.log(err));


	// db.collection('Todos').insertOne({
	//     text:'Something to do',
	//     completed: false
	// }, (err, result) => {
	//     if(err){
	//         return console.log('Unable to insert todo');
	//     }
	//     console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne(
	// 	{
	// 		name: 'Andre Santos',
	// 		age: 34,
	// 		location: 'Aracaju/SE',
	// 	},
	// 	callbackError
	// );

	db.close();
});
