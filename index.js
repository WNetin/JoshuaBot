const Discord = require("discord.js")
const dotenv = require("dotenv")
dotenv.config()

const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.GuildBans,
        Discord.IntentsBitField.Flags.GuildEmojisAndStickers,
        Discord.IntentsBitField.Flags.GuildVoiceStates,
        Discord.IntentsBitField.Flags.GuildPresences,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.DirectMessages,
        Discord.IntentsBitField.Flags.DirectMessageReactions,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.MessageContent,
    ]
})

module.exports = client


client.on('interactionCreate', (interaction) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand){

        const cmd = client.slashCommands.get(interaction.commandName);
        
        if(!cmd) return interaction.reply("error")
        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction)
    }
})

client.on('ready', () =>{
    console.log("BOT ONLINE!")
})

client.slashCommands = new Discord.Collection()

require("./src/handler")(client)

client.on("messageCreate", async (msg) => {

    if(msg.author.id === "301523621833211905" && msg.content === "-staff"){
        client.destroy()
    }
})

client.login(process.env.TOKEN)