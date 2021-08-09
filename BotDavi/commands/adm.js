module.exports = {
    name: "adm",
    description: "mostra gifs aleatorios de adm",
    aliases: [  ""  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
      
        const {MessageEmbed} = require("discord.js")
        let gifs = [
            "https://tenor.com/view/adm-furioso-gif-20517359",
            "https://tenor.com/view/adm-on-gif-18906950",
            "https://tenor.com/view/tuco-tupac-tucasso-artur-tuco-adm-gif-18788852",
            "https://tenor.com/view/adm-on-adm-meme-discord-tenor-gif-18042954",
            "https://tenor.com/view/adm-eu-nao-li-as-regras-dance-gif-17880739",
            "https://tenor.com/view/adm-shades-off-handsome-blink-gif-16151567"

        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
  
        
        message.channel.send(gifs[gif]);
   } 
  };

