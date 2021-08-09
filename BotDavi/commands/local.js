module.exports = {
    name: "local",
    description: "localiza servidor ",
    aliases: [ "conect", "conectar" ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        
        let emoji_putin = client.emojis.cache.get("873932619501404190").toString();
        let locals = [
        "Estou conectando ao servidor",
        "Estou conectado",
        "Conectado"

            
        ];
        let local= Math.round((locals.length - 1) * Math.random());
        const { MessageEmbed } = require('discord.js');
        

        

        const embed = new MessageEmbed()
        .setTitle(emoji_putin +  "" +  locals[local]  + ""  + emoji_putin)
        .setColor(0x30a3d1)
        .setAuthor(user.tag)
        .setImage("https://i.pinimg.com/originals/1c/aa/40/1caa406fbe764228551a30045e0ec271.gif")

        message.channel.send(embed);
    }
};