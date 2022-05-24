const joueur = require('./bdd/joueur.json')
const event = require('../../actions/patern.json')
const fs = require("fs");

module.exports = {
    name: "start",
    run : async(client, message, args)  => {

        if(!joueur[message.author.id]) {
            joueur[message.author.id] = {
                pseudo : message.author.username,
                argent: 100,
                points : 0,
                niveau : 0,
                xp : 0
            }
            fs.writeFile("./commands/L'explorateur/bdd/joueur.json", JSON.stringify(joueur), (err) => {
                if(err) console.log(err);
            })        
            return message.channel.send(event["report"].start + ` <@${message.author.id}> **: Votre aventure commence dès maintenant ! \n Vous apparaissez donc dans une petite maison loin de tout et vous faites 5km vers *une direction inconnue*. \n Vous arrivez vers un arbre couché qui forme un banc, et vous voyez enfin une ville et des bois. \n \n 🌳 Marcher vers les bois \n 🏠 Se diriger vers la ville \n \n - *Choisissez votre destination avec __les réactions sous ce message__.* ⚠️ \n En vous souhaitant une bonne aventure.`)

        }
        message.channel.send(event["report"].start + ` <@${message.author.id}> **: Vous avez déjà commencé votre aventure.`)
    }
}