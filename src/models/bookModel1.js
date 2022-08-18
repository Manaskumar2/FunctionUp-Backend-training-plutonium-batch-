const mongoose =require("mongoose")
bookSchema1 =new mongoose.Schema({

    name:String,

    author_id:Number,
    price:Number,
    ratings:Number


},{ timestamps: true }
)
module.exports = mongoose.model('BookDetails', bookSchema1)
