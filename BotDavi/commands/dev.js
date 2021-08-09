module.exports = {
    name: "dev",
    description: "mostra meu dev",
    aliases: [ "dono", "desenvolvedor" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
       
        let emoji_help = client.emojis.cache.get("854009436221210624").toString();
  
        const { MessageEmbed } = require('discord.js');
      

        const embed = new MessageEmbed()
        .setColor(0xff6600)
        .setTitle(emoji_help + "  Metodos de contato  " + emoji_help)
        .setDescription("Davi (Developer)#6697" + ("\nthech.nasa.dj@gmail.com"))


       
        
       message.channel.send(embed)
        
       
     
    } 
};

