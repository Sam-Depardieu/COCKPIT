module.exports = {
    name: "say",
    run : (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ')
        
        message.channel.send(text)
    }
}