const Discord = require("discord.js")
const { client } = require("discord.js");
const delay = (ms) => new Promise(res => setTimeout(res, ms));
module.exports = {
    async LockSwitch(channel , roleid){
        if(channel.name.includes('🔒')){
            await channel.setName(channel.name.replace('🔒', '🔓'));
            console.log(channel.name)
            // overwrite a permissions do cargo moradores
            await channel.permissionOverwrites.edit(
                roleid,
                { "2048" : true,
                "34359738368": true,
                "68719476736": true,
                "64": true,
                "32768": true,
                "65536": true,
                "131072": true,
                "262144": true,
                "16384": true,
                "1048576": true,
                "2097152": true,
                "4096": true,
             },);;
             return;
        }else{
            await channel.setName(channel.name.replace('🔓', '🔒'));
            console.log(channel.name)
            await channel.permissionOverwrites.edit(
                roleid,
                { "2048" : false,
                "34359738368": false,
                "68719476736": false,
                "64": false,
                "32768": false,
                "65536": false,
                "131072": false,
                "262144": false,
                "16384": false,
                "1048576": false,
                "2097152": false,
                "4096": false,
            },);
            return;
    }
}
}