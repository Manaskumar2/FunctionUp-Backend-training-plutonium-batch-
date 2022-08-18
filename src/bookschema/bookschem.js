const mongoose = require('mongoose');
const bookSchema =mongoose.Schema({
    bookName :{
        type :String
    
    },
    authorName :{
        type:String,
        required: true
    },
    catagory :{
        type : String,
        numOf :["Classics","Comic","Novel","Detective", "Mystery","Fantasy","Horror"]
    },
    publicYear: Number,

},
//
{ timestamps: true });

module.exports = mongoose.model('Booklist',bookSchema)//booklists
