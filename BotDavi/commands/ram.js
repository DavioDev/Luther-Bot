module.exports = {
    name: "ram",
    description: "mostra ram",
    aliases: [ "gasto", "ram", "memoria" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
        let emoji_ram = client.emojis.cache.get('854010087555203124').toString();

        let gifs = ["https://tenor.com/view/pesado-gimnasio-levantar-pesas-entrenamiento-debil-gif-10860529", "https://tenor.com/view/chrome-eating-ram-joey-friends-ram-abuse-greedy-chrome-gif-17554657", "https://tenor.com/view/yawnface-gif-4425271"];
        let gif = Math.round((gifs.length - 1) * Math.random());
        let ram = process.memoryUsage().heapUsed / 1024 / 1024
        
     message.channel.send(   emoji_ram + "  esta com " + ram.toFixed(2)+ " % de uso  " + emoji_ram);
     message.channel.send(gifs[gif]);
    } }
;