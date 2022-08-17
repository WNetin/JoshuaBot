const fs = require("fs")

module.exports = async (client) => {

    const SlashsArray = []
    fs.readdir("./commands/", (error, Folder) => {
        Folder.forEach((subFolder) => {
            fs.readdir(`./commands/${subFolder}/`, (error, files) =>{
                files.forEach(files =>{

                    if(!files?.endsWith(".js")) return;
                    files = require(`../commands/${subFolder}/${files}`);
                    if(!files?.name) return;
                    client.slashCommands.set(files?.name, files);

                    SlashsArray.push(files)


                })
            })
        });
    });
    client.on("ready", async ()=>{
        client.guilds.cache.forEach(guild => guild.commands.set(SlashsArray))
    })
};