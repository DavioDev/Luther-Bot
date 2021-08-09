

module.exports = {
  name: "avatar",
  description: "mostra avatar",
  aliases: [ "avat", "perfil"  ],
  cooldown: 3,
  permissions: [ "SEND_MESSAGES" ],
  async execute(client, message, args){
    let emoji_rindo = client.emojis.cache.get('865656557895155753').toString();
      const {MessageEmbed} = require("discord.js")

      const user = message.mentions.users.first() || message.author;
      const avatar = user.displayAvatarURL({ size: 512 }); 

      const embed = new MessageEmbed()
      .setColor(0xff6600)
      .setImage(avatar)
      .setAuthor(  "👀 Avatar de " + user.tag + " 👀")
      .setTitle(emoji_rindo + "clique na imagem para baixa-la" + emoji_rindo);
      message.channel.send(embed);
 } 
};