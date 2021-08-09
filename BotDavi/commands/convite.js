module.exports = {
    name: "convite",
    description: "Convide o bot luther para um servidor",
    aliases: [ "cvv", "invite" ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args) {
        
        const { MessageEmbed } = require('discord.js');

        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle("> Pode me colocar clicando aqui 🤗 ")
        .setURL('https://discord.com/oauth2/authorize?client_id=867903185988485141&scope=bot&permissions=2048')
        .setThumbnail('https://stickershop.line-scdn.net/stickershop/v1/sticker/11450328/android/sticker.png')
        .setDescription("Convide-me clicando acima!")
        .setTimestamp()
        .setFooter("Luther")
        .setDescription("Aproviete bem")
        
        const m = await message.channel.send(`${message.author} O link ja chegou ao seu privado, Obrigado 🤩` );
        m.react('📫');
        
        client.users.cache.get(message.author.id).send(embed);
    }
};