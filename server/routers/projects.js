var express = require('express');
var router = express.Router();
var uuid = require("uuid/v1");
var db = require("./db")

router.post("/", (req, res, next) => {
    //generate ID here
    let ID = uuid();
    console.log("new ID: ", ID)
    let projectBody = req.body;

    projectBody['ID'] = ID;
    projectBody['type'] = 'project'

    let createdPromise = db.createRecord(projectBody, false)
    createdPromise.then((body) => {
        res.send(201, body)
    }).catch(err => {
        res.sendStatus(500)
        console.error("error in GET profile: ", err)
    })
    // match people to projects
})

router.get("/:projectID", (req, res, next) => {
    let projectID = req.params.projectID
    console.log("retrieving ID: ", projectID)
    let dataPromise = db.getRecord(projectID)
    dataPromise.then((body) => {
        console.log("in route: ", body)
        res.send(200, body)
    }).catch(err => {
        res.sendStatus(500)
        console.error("error in GET profile: ", err)
    })
})


module.exports = router;