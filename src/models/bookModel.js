const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "AuthorName"
    }, 
    price: Number,
    ratings: Number,
    publisher :{
        type: ObjectId,
        ref:"PublisherDetails"
    },
    isHardCover :{
        type:Boolean,
        default:false
    }



}, { timestamps: true });


module.exports = mongoose.model('BookLibrary', bookSchema)
