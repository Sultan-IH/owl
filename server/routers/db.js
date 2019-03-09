const secretKey = "$2a$10$PMflazmcGFk4GBGo1BY10uRNnH8KvcTwMdf1XnlvVUXcv20Yo08PC";
const root = "https://api.jsonbin.io/"
const binpath = root + "b"
const collectionpath = root + "c"
const request = require("request-promise");


var profiles = [],
    projects = [];

function getAllRecords(ids) {
    console.log(ids)
    let promises = [];
    for (let id of ids) {
        let promise = getRecord(id);
        promises.push(promise)
    }
    return Promise.all(promises)
}

function createRecord(profile, isProfile) {
    let options = {
        url: binpath,
        headers: {
            "Content-Type": "application/json",
            "secret-key": secretKey,
            "name": profile['ID'],
        },
        json: profile,
    };

    return request.post(options, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            console.log(response.statusCode, response.statusMessage)
            console.error("error creating new porfile: ", error)
            return
        }

        if (isProfile) {
            profiles.push(body.id)
        } else {
            projects.push(body.id)
        }

        console.log(response.statusCode, response.statusMessage)
        console.log("created profile with ID: ", body)
    }).promise()
}

function getRecord(ID) {
    let options = {
        url: binpath + "/" + ID,
        headers: {
            "secret-key": secretKey,
        }
    };
    return request.get(options).promise()
}

module.exports = {
    createRecord,
    getRecord,
    profiles,
    projects,
    getAllRecords
}