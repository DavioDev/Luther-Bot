module.exports = {
    name: "banido",
    description: "mostra gifs aleatorios de banido",
    aliases: [  ""  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
      
        const {MessageEmbed} = require("discord.js")
        let gifs = [
            "https://tenor.com/view/banido-gif-19731746",
            "https://tenor.com/view/w-miguel17-banido-sasuke-jutsu-banned-gif-17769467",
            "https://tenor.com/view/ban-banned-gif-8540512",
            "https://tenor.com/view/ban-hammer-cinzou-ban-banido-look-gif-17786909",
            "https://tenor.com/view/when-your-team-too-good-ban-salt-bae-gif-7580925"

        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
  
        
        message.channel.send(gifs[gif]);
   } 
  };