require("dotenv").config()
var inquirer = require("inquirer")
var keys = require("./keys")
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify)

function searchSpotify() {
    inquirer.prompt([{
        name: "songSearch",
        message: "Enter which artist you'd like to search"
    }]).then(inquireResponse => {
        console.log(inquireResponse.songSearch)

        spotify.search(
            {
                type: 'track',
                query: inquireResponse.songSearch
            },
            function (err, res) {
                if (err) throw err
                console.log(res.tracks)
            }
        )
        showOptions()
    })
}

function showOptions() {
    inquirer.prompt([{
        type: "list",
        name: "options",
        message: "chooseoption",
        choices: ["search songs by artist", "searchbands intown", "searchOMDB", "quit"]

    }]).then(inquireresponse => {

        inquireresponse.options === "quit"
            ? process.exit()
            : inquireresponse.options === "search songs by artist"
                ? searchSpotify()
                : inquireresponse.options === "searchbands intown"
                    ? console.log(inquireresponse.options)
                    : inquireresponse.options === "searchOMDB"
                        ? console.log(inquireresponse.options)
                        : console.log('unrecognized command')
    })
}

showOptions()

