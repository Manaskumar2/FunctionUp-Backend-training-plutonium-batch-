const mongoose = require('mongoose')

const newBookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    year: {
        type:Number,default :2021
    },

    authorName: String,

    totalPages:Number,
    stockAvailable: Boolean,
   
}, { timestamps: true });


module.exports = mongoose.model('BookDB', newBookSchema)