module.exports = {
    name: "info",
    description: "Informações secundárias do luther",
    aliases: [ "infos" ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        
        let emoji_putin = client.emojis.cache.get("854001074029854730").toString();

        const { MessageEmbed } = require('discord.js');
        

        

        const embed = new MessageEmbed()
        .setTitle( emoji_putin  + ' Três palavras que me resumem: tô com fome! ' +  emoji_putin)
        .setColor(0xff6600)
        .setThumbnail("https://i.dlpng.com/static/png/6637658_preview.png")
        .setDescription("Este bot ainda esta em desenvolvimento porem qualquer duvida ou sugestão voce pode chamar meu desenvolvedor")
        .setFooter("Luther", "https://e7.pngegg.com/pngimages/839/627/png-clipart-drawing-fan-art-digital-art-theodd1sout-white-carnivoran-thumbnail.png")
        .setImage("https://static.tvtropes.org/pmwiki/pub/images/odd1sout_james.png")
        .setAuthor(user.tag);

        message.channel.send(embed);
    }
};