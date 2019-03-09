const secretKey = "$2a$10$PMflazmcGFk4GBGo1BY10uRNnH8KvcTwMdf1XnlvVUXcv20Yo08PC";
const root = "https://api.jsonbin.io/b"
const request = require("request-promise");

function createProfile(profile) {
    let options = {
        url: root,
        headers: {
            "Content-Type": "application/json",
            "secret-key": secretKey,
            //"collection-id": "profiles",
            "name": profile['ID'],
        },
        json: profile,
    };
    console.log(options)
    return request.post(options, (error, response, body) => {
        if (response.statusCode !== 200) console.error("error creating new porfile")
        if (error) console.error("error creating new porfile: ", error)

        console.log(response.statusCode, response.statusMessage)
        console.log("created profile with ID: ", body)
    }).promise()
}

function getProfile(ID) {
    let options = {
        url: root + "/" + ID,
        headers: {
            "secret-key": secretKey,
        }
    };
    return request.get(options).promise()
}
module.exports = {
    createProfile: createProfile,
    getProfile: getProfile,
}