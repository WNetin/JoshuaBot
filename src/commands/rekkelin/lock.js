const Discord = require("discord.js")
const LockFunc = require("../../functions/lock")

module.exports =  {
    name: "lock",
    description: "Tranca/Destranca seu quarto.",
    type: Discord.ApplicationCommandType.ChatInput,    
    
    run: async (client, interaction, args) => {

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
          }

        //area dos moradores
        const netinarea = await client.channels.fetch("978335414429552690")
        const guiarea = client.channels.cache.get('978338794866626631');
        const axelarea = client.channels.cache.get("978332193246023700");
        const morador = interaction.member.roles.cache.get('978329287230914670')
        //IDS
        const axel = '492321935322251284';
        const guibrekk = '602342396285681677';
        const netin = '301523621833211905'; 

        let embedClose = (channel) => { return(new Discord.EmbedBuilder()
        .setColor("Red")
        .setDescription(`**\\🗝️ Acabei de Fechar a** \`${channel.name}\`**.**`))};

        let embedOpen = (channel) => {return(new Discord.EmbedBuilder()
            .setColor("Green")
            .setDescription(`**\\🗝️ Acabei de Abrir a** \`${channel.name}\`**.**`))};

        function Reply(channel){
            if(channel.name.includes('🔒')){
                interaction.reply({ embeds: [embedClose(channel)], ephemeral: false})
            }else{
                interaction.reply({ embeds: [embedOpen(channel)], ephemeral: false})
            }
        }

        if(interaction.member.id === netin){
            await LockFunc.LockSwitch(netinarea, morador)
            Reply(netinarea)
            await sleep(1000 * 10)
            interaction.deleteReply()
        }else if(interaction.member.id === axel){
            await LockFunc.LockSwitch(axelarea, morador)
            Reply(netinarea)
            await sleep(1000 * 10)
            interaction.deleteReply()}
            else if(interaction.member.id === guibrekk){
                await LockFunc.LockSwitch(guiarea, morador)
                Reply(netinarea)
                await sleep(1000 * 10)
                interaction.deleteReply()}
                else{
                    const embed = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`**\\❌ Você não tem Permissão para executar esse comando.`)
                    await interaction.reply({
                        embeds: [embed],
                        ephemeral: true
                    })
                    await sleep(1000 * 5)
                    interaction.deleteReply()
                }

    }}