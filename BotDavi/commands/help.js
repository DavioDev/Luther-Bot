module.exports = {
    name: "help",
    description: "Comandos do bot",
    aliases: [ "ajuda", "comandos" ],
    cooldown: 5,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args) {
        let emoji_help = client.emojis.cache.get("854057106267963422").toString();
 
        const { MessageEmbed } = require('discord.js');

        


        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle(emoji_help + "  Meu site  " + emoji_help)
        .setThumbnail("https://images.randomhouse.com/author/2148991")
        .setImage("https://66.media.tumblr.com/56d12884a473a698284f9a2fae9158a3/tumblr_odf0w3oBwm1ts8vabo2_1280.gif")
        .setURL("https://lutherb.glitch.me/")
        .setDescription("Comandos abaixo 👇" + 
        ("\n") +
        ("\n👋UTILITARIOS👋") +
        ("\n") +
        ("\n-avatar") +
        ("\n-falar") +
        ("\n-local") +
        ("\n-ping") +
        ("\n-ram") +
        ("\n-reverso") + 
        ("\n") + 
        ("\n🎓SOBRE🎓") +
        ("\n") +
        ("\n-help") + 
        ("\n-site") +
        ("\n-convite") +
        ("\n-dev") +
        ("\n-info") +
        ("\n-github")   +
        ("\n") + 
        ("\n😂DIVERSÃO😂 ") +
        ("\n") +
        ("\n-banido") + 
        ("\n-ufc") +
        ("\n-adm") +
        ("\n-piadas") +
        ("\n-telecena") +
        ("\n-jogo") +
        ("\n-ednaldo") +
        ("\n") + 
        ("\n") +
        ("\n👍Espero que voçe tenha sido ajudado👍") + 
        ("\n") +
        ("\n💼você pode chamar meu desenvolvedor para mais suporte💼") +
        ("\n") +
        ("\n🥳Ou voçe tambem pode marcar meu bot para pegar o prefixo🥳")
         
        );



        message.channel.send(embed);
    }
};




