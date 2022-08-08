const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')
const lodash =require('lodash')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    logger.welcome()
    console.log("Current date is :",helper.currentDate)
    console.log("Current Month is :",helper.currentMonth);
    helper.getBatchInfo()
    formatter.stringTrim()
    formatter.changeToLowerCase()
    formatter.changeToUpperCase()

    const months=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
   console.log(lodash.chunk(months,[size=4]))
 const odd=[3,5,7,9,11,13,15,17,19,21]
 console.log(lodash.tail(odd));
 console.log(lodash.union([2,5,6],[2,6,7],[5,6,7],[8,4,6]))
console.log(lodash.fromPairs([ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']
]));

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason