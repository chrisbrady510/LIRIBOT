require("dotenv")
var inquirer = require ("inquirer")

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
})


