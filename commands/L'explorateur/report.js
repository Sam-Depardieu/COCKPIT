const event = require('../../actions/patern.json')
const choix = require('../../actions/choix.json')
const cooldown = new Set();
const possibility = ["Bois"]   //"Bar", "Vile", "Desert", "Magicien", "Marchand", "Montagnes", "Ville_abandonnée",

module.exports = {
    name: "report",
    run : async(client, message, args)  => {
        
        let time = Math.floor((Math.random() * 100) + 1)
        
        if (cooldown.has(message.author.id)) { // if user on cooldown
            
            message.channel.send(event["report"].cooldown)
        
        }else{
            const choixRandom = possibility[Math.floor(Math.random() * possibility.length)]
            const vars = choix[choixRandom]
            message.channel.send(vars[Math.floor(Math.random() * vars["possibilité"].length)])
            //message.channel.send(vars.message + vars["possibilité"]["renard"].message)
            
            cooldown.add(message.author.id); // <- saves the time 
            setTimeout(() => cooldown.delete(message.author.id), time*1000) // <- I don't remember what it does but it's needed
        }
    }
}