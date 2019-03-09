var express = require('express');
var router = express.Router();
var db = require("./db");

router.get("/projects/:profileID", (req, res, next) => {
    // this gets recommended project for a person
    let allRecordPromise = db.getAllRecords(db.projects)
    console.log('AAAAAAAAAAAAAAAAA', req.params.profileID)
    let profilePromise = db.getRecord(undefined, req.params.profileID)

    Promise.all([allRecordPromise, profilePromise]).then(data => {
        let projects = data[0];
        let profile = JSON.parse(data[1]);

        for (let i = 0; i < projects.length; i++) {
            projects[i] = JSON.parse(projects[i])
        }
        let selectedProjects = matchProjectsToProfile(projects, profile)

        console.log("projects: ", selectedProjects)
        res.send(200, selectedProjects)

    }).catch(err => {
        console.error(err)
        res.send(500, err)
    })
})

function matchProjectsToProfile(projects, profile) {
    let hasSkills = profile.skills;
    let matching = []
    console.log("profile skills: ", hasSkills)
    for (let p of projects) {
        console.log("project skills: ", p.skills)
        let intersection = hasSkills.filter(item => -1 !== p.skills.indexOf(item))
        console.log("intersection: ", intersection)
        if (intersection.length >= 1) matching.push(p)
    }
    return matching

}
module.exports = router