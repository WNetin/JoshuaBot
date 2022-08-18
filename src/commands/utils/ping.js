const Discord = require("discord.js")

module.exports =  {
    name: "ping",
    description: "Veja meu ping.",
    type: Discord.ApplicationCommandType.ChatInput,    
    
    run: async (client, interaction, args) => {
        let ping = client.ws.ping;
        let embed = new Discord.EmbedBuilder()
        .setColor("Purple")
        .setDescription(`**\\📡 Meu ping está em** \`${client.ws.ping}ms\`**.**`);

        interaction.reply({ embeds: [embed], ephemeral: true })

    }}
