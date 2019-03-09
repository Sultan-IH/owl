var express = require('express');
var router = express.Router();
var uuid = require("uuid/v1");
var db = require("./db")

router.post("/", (req, res, next) => {
    //generate ID here
    let ID = uuid();
    console.log("new ID: ", ID)
    let projectBody = req.body;
    console.log(req.body)
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

router.put("/:projectID/:profileID", (req, res, next) => {
    // collaboration
    let projectPromise = db.getRecord(req.params.projectID)
    projectPromise.then(project => {
        if (!project.hasOwnAttribute('collaborators')) {
            project.collaborators = []
        }
        project.collaborators.push(req.params.profileID)
        let ID = db.projectMap[project['name']]
        db.updateRecord(project, ID)
        let profilePromise = db.getRecord(req.params.profileID)
        profilePromise.then(profile => {
            let ID = db.profileMap[profile['email']]
            if (!project.hasOwnAttribute('currentProjects')) {
                project.currentProjects = []
            }
            profile.currentProjects.push(project['name'])
            db.updateRecord(profile, ID)
        })

        res.send(200)
    })
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