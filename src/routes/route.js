const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
});
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post("/POST/players",function(req,res){
    let ele= req.body
    for(let i in players){
        let name= players[i]
        if(name.name==ele.name)
        {
            return res.send("the player is exit")
        }
        else{
            players.push(ele)
        
             }
    res.send({date:players})
}
})
// let forId=[
//     {
//         "bookingNumber": 1,
//         "sportId": "51",
//         "centerId": "71",
//        "type": "private",
//        "slot": "16286598000000",
//        "bookedOn": "31/08/2021",
//        "bookedFor": "01/09/2021"
//       },
//       {
//         "bookingNumber": 2,
//         "sportId": "52",
//         "centerId": "72",
//        "type": "private",
//        "slot": "16286598000000",
//        "bookedOn": "31/08/2021",
//        "bookedFor": "01/09/2021"
//       },
//       {
//         "bookingNumber": 3,
//         "sportId": "53",
//         "centerId": "73",
//        "type": "private",
//        "slot": "16286598000000",
//        "bookedOn": "31/08/2021",
//        "bookedFor": "01/09/2021"
//       },
//       {
//         "bookingNumber": 4,
//         "sportId": "54",
//         "centerId": "74",
//        "type": "private",
//        "slot": "16286598000000",
//        "bookedOn": "31/08/2021",
//        "bookedFor": "01/09/2021"
//       }
// ]
// // start logic from the here
// const storeId=[0]
// router.post("/players/playerName/bookings/bookingId",function(req,res){
// let playerId=req.query.id
// console.log(playerId)
// let playerName=req.query.name
// if(playerId in  storeId){   
//     return res.send("id is bookd try again")
// }
// else{
//     let isNameMatch=false;
//     // to  check name is already exists in my array or not
//     for (let index = 0; index < players.length; index++) {
//         if(players[index].name==playerName){
//             isNameMatch=true
//             for (let index = 0; index < forId.length; index++) {
//                 if(forId[index].bookingNumber==playerId){
//                     storeId.push(playerId) 
//                      res.send(forId[index])
//                 }
                
//             }
//         }

//     }
//     if(!isNameMatch){
//         res.send("this name player is not exist")
//     }
    
// }

// })
//2nd assignment


let booking = [
    {
        bookingNumber: 1,
        bookingId: 12,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "16286598000000",
        bookedOn: "31/08/2021",
        bookedFor: "01/09/2021",
    },
];


router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
    let playerExist = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.params.playerName) {
            playerExist = true
        }
    }
    if (!playerExist) {
        return res.send("This player does not exist")
    }
    for (let i = 0; i < booking.length; i++) {
        if ((booking[i].bookingId == req.params.bookingId)) {
            return res.send("This booking id already existed in Data");
        }
    }
    req.body.playerName = req.params.playerName
    req.body.bookingId = req.params.bookingId
 
    booking.push(req.body);
    return res.send(booking);
});
let persons =[
    {
        name: "PK",
        age: 10,
        votingStatus: false
        
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
        
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
        
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
        
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
        
    }
]

router.post('/voting_persion',function(req,res){
    let inputAge=req.query
    let votingAge=inputAge.age
    let filterPersions=[]
    for(let i in persons){
        if(persons[i].age>votingAge){
            persons[i].votingStatus=true
            filterPersions.push(persons[i])
        }
    }
    res.send({  data:filterPersions,status:true})
})

    
module.exports = router;