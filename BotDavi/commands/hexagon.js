module.exports = {
    name: "hexagon",
    description: "Meu jogo",
    aliases: [ "compras", "jogo" ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args) {
        let emoji_help = client.emojis.cache.get("865656668280848434").toString();
        const { MessageEmbed } = require('discord.js');

        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle(    emoji_help + "   Link para o  game   " + emoji_help)
        .setURL('https://davisgamedev.itch.io/outside-of-hexagon')
        .setThumbnail('https://img.itch.zone/aW1nLzU0MTEzMzAucG5n/original/aei0DG.png')
        .setDescription("  👾 Se divirta bastante 👾 " ) 
        .setTimestamp()
        .setFooter("Luther")
        .setImage("https://img.itch.zone/aW1nLzU0MTEzMzAucG5n/original/aei0DG.png")
       
        
        
        message.channel.send(embed)
    }
};

