var today = new Date();

var currentDate =today.getDate()+"-"+(today.getMonth()+1)+"-"+ today.getFullYear()

//2-05-2022


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const d = new Date();
let currentMonth=monthNames[d.getMonth()];

const batchName= "plutonium"
const week = "W3"
const day  ="D5"
let getBatchInfo = function (){
    console.log(batchName+","+(week+day)+','+"the topic for today is Nodejs module system");

}
module.exports.getBatchInfo=getBatchInfo
module.exports.currentDate= currentDate
module.exports.currentMonth=currentMonth
