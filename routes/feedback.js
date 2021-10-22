
const express = require('express');
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended: true}))

//read and write to file 
const fs = require('fs');

//import the contents of json file

const feedbackData = require('../data/feedback.json'); //converted to js object
//[{}, {name:, title, message}, {}, {}, {}]


router.get('/feedback', (req, res) => {
    
    res.render('feedback')
})


//get all the messages from feedback.js
router.get('/api', (req, res) => {
    
    res.json(feedbackData) //[{}, {}, {}, {}]
})

router.post('/api', (req, res) => {
    
    //grab data from header (body parser)
    let {name, title, message} = req.body;

    console.log(req.body);

    //push it to the feedbackData obj
    feedbackData.unshift(req.body) //js object

    //save to feedback.json file 
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }

        console.log('feedback.json file has been updated');
    } )
    //send back all of the messages with new message attached
    res.json(feedbackData)
    
})

router.delete('/api', (req, res)=>{

})





module.exports = router;