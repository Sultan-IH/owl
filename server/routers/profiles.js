var express = require('express');
var router = express.Router();
var uuid = require("uuid/v1");
var db = require("./db")

router.post("/", (req, res, next) => {
    //generate ID here
    let ID = uuid();
    console.log("new ID: ", ID)
    let profileBody = req.body;

    profileBody['type'] = 'profile';
    profileBody['ID'] = ID;

    let createdPromise = db.createRecord(profileBody, true)
    createdPromise.then((body) => {
        res.send(201, body)
    }).catch(err => {
        res.sendStatus(500)
        console.error("error in GET profile: ", err)
    })
})

router.get("/:profileID", (req, res, next) => {
    let profileID = req.params.profileID
    console.log("retrieving ID: ", profileID)
    let dataPromise = db.getRecord(undefined, profileID)
    dataPromise.then((body) => {
        console.log("in route: ", body)
        res.send(200, body)
    }).catch(err => {
        res.sendStatus(500)
        console.error("error in GET profile: ", err)
    })
})


module.exports = router;