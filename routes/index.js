
const express = require('express');
const router = express.Router();
//import data from data.json 
const dataFile = require('../data/data.json'); //js convert the json => js object

//{speakers: [{}, {}, {},{}]}

router.get('/', (req, res) => {
    
    let pageSpeakers = dataFile.speakers //this is an array of speakers [{ artwork: []}, {}, {}]

    //an array that holds all of the artwork 
    let pagePhotos = []

    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    console.log(pagePhotos);

    res.render('index', {
        artwork: pagePhotos, 
        pageTitle: "Roux Meetups", 

    })
})

module.exports = router;