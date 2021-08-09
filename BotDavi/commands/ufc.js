module.exports = {
    name: "briga",
    description: "porradaria sem limites",
    aliases: [ "porrada", "ufc", "luta", "briga"  ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    
        const {MessageEmbed} = require("discord.js")
        let gifs = [
            "https://tenor.com/view/fat-kick-fight-briga-chute-gif-13113365",
            "https://tenor.com/view/ufc-garbrandt-ko-mma-gif-18114036",
            "https://tenor.com/view/fight-smash-girl-fight-gif-15340791",
            "https://tenor.com/view/killua-zoldyck-hunter-x-hunter-punch-anime-gif-16297711",
            "https://tenor.com/view/goku-dragon-balls-kaoiken-vegeta-gif-9549596",
            "https://tenor.com/view/ufc-knockout-kick-gif-5369518",
            "https://tenor.com/view/martin-lawrence-beat-up-punch-funny-gif-14193446"
        ]
        let gif = Math.round((gifs.length - 1) * Math.random());
         
        let textis = [
            "Alguem apanhou",
            "Vai deixar?",
            "To torcendo pra quem ganhar",
            "Fraco",
            "Sou apenas a pleteia",
            "VAMOSS UHUUU",
            "BRIGA BRIGA BRIGA"
        ]
        let porrada = Math.round((textis.length - 1) * Math.random());
       message.channel.send(textis[porrada]);
       message.channel.send(gifs[gif])
   } 
  };