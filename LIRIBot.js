require("dotenv").config()
var inquirer = require ("inquirer")
var keys = require ("./keys")
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify)



inquirer.prompt([{
    type: "list",
    name: "options",
    message: "chooseoption",
    choices: ["searchsongs byartist", "searchbands intown", "searchOMDB", "quit"]

}]).then(inquireresponse=>{
    
    inquireresponse.options === "quit"
    ? process.exit() 
    : inquireresponse.options === "searchsongs byartist"
    ? console.log(inquireresponse.options)
    : inquireresponse.options === "searchbands intown"
    ? console.log(inquireresponse.options)
    : inquireresponse.options === "searchOMDB"
    ? console.log(inquireresponse.options)
    : console.log('unrecognized command')
})


