const fs = require("fs")

module.exports = async (client) => {
    let commandsLoaded = 0;
    const SlashsArray = [];
    fs.readdir("./src/commands", (error, Folder) => {
        Folder.forEach((subFolder) => {
            fs.readdir(`./src/commands/${subFolder}/`, (error, files) =>{
                files.forEach(files =>{

                    if(!files?.endsWith(".js")) return;
                    files = require(`../commands/${subFolder}/${files}`);
                    if(!files?.name) return;
                    client.slashCommands.set(files?.name, files);

                    SlashsArray.push(files);
                    commandsLoaded++;


                })
            })
        });
    });
    client.on("ready", async ()=>{
        client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray));
        console.log(`${commandsLoaded} Commandos Foram Carregados!`);
    })
};