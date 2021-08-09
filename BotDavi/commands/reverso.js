module.exports = {
    name: "reverso",
    description: "reverte texto",
    aliases: [ "revertido", "contrario", "rev" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
        const { MessageEmbed } = require('discord.js');
        let emoji_help = client.emojis.cache.get("854000757563719680").toString();
 

        if(args.length != 0){
            let ordena = "";

            for(var x = 0; x < args.length; x++){
                ordena += args[x] + " ";
            }

            ordena = ordena.slice(0, -1).toLowerCase();

            let texto = ordena.split('');
            texto = texto.reverse();

            var texto_ordenado = "";
            for(var i = 0; i < texto.length; i++){
                texto_ordenado += texto[i];
            }

            const embed = new MessageEmbed()
                .setTitle( emoji_help + '  Sua mensagem esta pronta  ' + emoji_help)
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
                .setColor(0xff6600)
                .setDescription("`" + texto_ordenado + "`");

            message.channel.send(embed);
        }
    }
};
       