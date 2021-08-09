module.exports = {
    name: "falar",
    description: "Faça o luther falar algo",
    aliases: [ "fala", "falar", "escrever", "escreva" ],
    usage: "fala <suamensagem>",
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    execute(client, message, args) {

        let content = ''
        let deleteMsg = [false, 0]
        if (args[0] == '-del') deleteMsg = [true, 1]
        message.channel.send(`Fala solicitada por  ${message.author} `);   
        for (let msg = 0 + deleteMsg[1]; msg < args.length; msg++) {
          content += args[msg] + " "
        }
      
        if (content.length != 0) {
           message.channel.send(content)
          if (deleteMsg[0]) {
             message.delete()
          }
        } else {
          message.channel.reply('nao posso enviar nada vazio!')
        }
      }
};