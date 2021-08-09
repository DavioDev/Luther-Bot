module.exports = {
    name: "site",
    description: "Site do luther",
    aliases: [  ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args) {
        
        const { MessageEmbed } = require('discord.js');

        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle("> Meu site fica aqui 🤗 ")
        .setURL('https://lutherb.glitch.me/')
        .setThumbnail('https://media.discordapp.net/attachments/873985565077405699/873989866558468106/images.png')
        .setDescription("")
        .setTimestamp()
        .setFooter("Luther")
        .setDescription("Espero que goste")
        
        
        
        message.channel.send(embed);
    }
};