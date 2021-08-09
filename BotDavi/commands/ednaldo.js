module.exports = {
    name: "ednaldo",
    description: "mostra gifs aleatorios do ednaldo pereira",
    aliases: [  "ednaldo-pereira"  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
      
        const {MessageEmbed} = require("discord.js")
        let gifs = [
            "https://tenor.com/view/ednaldo-pereira-vale-nada-futebol-kick-celebrate-gif-17796160",
            "https://tenor.com/view/ednaldo-pereira-banido-desbanido-meme-meme-banido-gif-19429642",
            "https://tenor.com/view/ednaldo-ednaldo-pereira-pogs-cringe-ednaldo-cringe-gif-20660507",
            "https://tenor.com/view/ednaldo-pereira-clone-apontando-vale-nada-dance-gif-17809486",
            "https://tenor.com/view/ednaldo-pereira-banido-gif-19901864",

        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
  
        
        message.channel.send(gifs[gif]);
   } 
  };



  