module.exports = {
    name: "piadas",
    description: "piadas",
    aliases: [ "piada" ],
    cooldown: 3,
    permissions: [ "SEND_MESSAGES" ],
    async execute(client, message, args){
    
       
        let piadas = [
            "O que o pato disse para a pata?" + ("\nR.: Vem Quá!"),
            "Porque o menino estava falando no telefone deitado?" + ("\nR.: Para não cair a ligação"),
            "Qual é a fórmula da água benta?" + ("\nR.: H Deus O!"),
            "Era uma vez um pintinho que se chama Relam. Toda vez que chovia, relam piava!",
            "O que o pintinho falou para a mãe dele?" + ("\nR.: Oi mãe"),
            "Qual a cidade brasileira que não tem táxi?" + ("\nR.: Uberlandia!"),
            "Porque o jacaré tirou o filho da escola?" + ("\nR.: Porque ele réptil de ano."),
            "Porque o Batman colocou o bat-móvel no seguro?" + ("\nR.: Porque ele tem medo que Robin! (Roubem)"),
            "Qual é o alimento mais sagrado que existe?" + ("\nR.: O amém doim."),
            "Por que o policial não usa sabão?" + ("\nR.: Porque ele prefere deter gente.")

            
        ]
        let piada = Math.round((piadas.length - 1) * Math.random());
        
     
        message.channel.send(piadas[piada]);
        message.channel.send("https://tenor.com/view/muttley-very-funny-lol-laugh-s%C3%B6ren-s%C3%B6rensen-gif-14695578");
     
        
     
    } }
;

