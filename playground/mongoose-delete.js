const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user'); 

const id = '5a53eb114fbd898d0e1e859f11';
//Todo.remove({}) - it's necessary to passed one object even an empty object, if passed an empty object all 
// docs will be deleted 

//Todo.findOneAndDelete({_id: id}) 

    User.findByIdAndRemove('5a5301d1c3889508e38d456e').then(user => {
        if(!user){
            return console.log('Unable to find user'); 
        }

        console.log(JSON.stringify(user, undefined, 2)); 
    }).catch(e => console.log(e)); 
