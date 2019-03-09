const secretKey = "$2a$10$PMflazmcGFk4GBGo1BY10uRNnH8KvcTwMdf1XnlvVUXcv20Yo08PC";
const root = "https://api.jsonbin.io/"
const binpath = root + "b"
const request = require("request-promise");
const fs = require('fs');
const path = require("path");

var profiles = [],
    projects = [];

var profileMap = {},
    projectMap = {};

function getAllRecords(ids) {
    console.log(ids)
    let promises = [];
    for (let id of ids) {
        let promise = getRecord(id);
        promises.push(promise)
    }
    return Promise.all(promises)
}

function createRecord(record, isProfile) {
    let options = {
        url: binpath,
        headers: {
            "Content-Type": "application/json",
            "secret-key": secretKey,
        },
        json: record,
    };

    return request.post(options, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            console.log(response.statusCode, response.statusMessage)
            console.error("error creating new porfile: ", error)
            return
        }

        if (isProfile) {
            profiles.push(body.id)
            profileMap[record['email']] = body['id']
        } else {
            projects.push(body.id)
            projectMap[record['name']] = body['id']

        }


        console.log(response.statusCode, response.statusMessage)
        console.log("created profile with ID: ", body)
    }).promise()
}

function setup() {
    let text = fs.readFileSync(path.join(__dirname, 'profile_mapping.json'), 'utf8')
    profileMap = JSON.parse(text);
    text = fs.readFileSync(path.join(__dirname, 'project_mapping.json'), 'utf8');
    projectMap = JSON.parse(text)

    for (let p in projectMap) {
        projects.push(projectMap[p])
    }
    console.log("profiles: ", profileMap)
    console.log("profile list ids ", profiles)
    console.log("projects: ", projectMap)
    console.log("project list ids ", projects)
}

function getRecord(ID, email) {
    if (ID === undefined) {
        ID = profileMap[email];
    }

    let options = {
        url: binpath + "/" + ID,
        headers: {
            "secret-key": secretKey,
        }
    };
    return request.get(options).promise()
}

function updateRecord(record, ID) {
    let options = {
        url: binpath + "/" + ID,
        headers: {
            "Content-Type": "application/json",
            "secret-key": secretKey,
        },
        json: record,
    };

    return request.put(options, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            console.log(response.statusCode, response.statusMessage)
            console.error("error creating new porfile: ", error)
            return
        }

        console.log(response.statusCode, response.statusMessage)
        console.log("updated record with ID: ", body)
    }).promise()
}
module.exports = {
    createRecord,
    getRecord,
    profiles,
    projects,
    setup,
    getAllRecords,
    updateRecord,
    profileMap,
    projectMap,
}