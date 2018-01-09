const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user'); 

const id = '5a53eb114fbd898d0e1e859f11';
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
// 	_id: id,
// }).then(todos => {
//     if(!todos){
//         return console.log('No register found');
//     }

// 	console.log('Todos', todos);
// });

// Todo.findOne({
//     _id:id
// }).then(todo => {
//     if(!todo){
//         return console.log('Id not found', id);
//     }

//     console.log('Todo', todo);
// })

    // Todo.findById(id).then(todo => {
    // 	if (!todo) {
    // 		return console.log('Id not found', id);
    // 	}

    // 	console.log('TodoById', todo);
    // }).catch(e => console.log(e));

    User.findById('5a5301d1c3889508e38d456e').then(user => {
        if(!user){
            return console.log('Unable to find user'); 
        }

        console.log(JSON.stringify(user, undefined, 2)); 
    }).catch(e => console.log(e)); 
