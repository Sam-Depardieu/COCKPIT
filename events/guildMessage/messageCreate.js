const { PREFIX } = require("../../config");

module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
        const cmdName = args.shift().toLowerCase()
        if (cmdName.length == 0) return
        let cmd = client.commands.get(cmdName)
        message.delete(message.author)
        if(cmd) cmd.run(client, message, args)
    }
}