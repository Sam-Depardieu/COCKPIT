const { Client, Collection } = require("discord.js");
const { TOKEN } = require('./config')
const client = new Client({ intents: 513 });

client.commands = new Collection()

require('./utils/handlers/EventUtil')(client)
require('./utils/handlers/CommandUtil')(client)

client.login(TOKEN)