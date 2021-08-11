const discord = require("discord.js");
const prefix = require('../config/config.json')

module.exports.run = (client, message, args) => {
    const echo = new discord.MessageEmbed()
        .addField('Latency', `${Date.now() - message.createdTimestamp}ms.`, true)
        .addField('API Latency', `${Math.round(client.ws.ping)}ms`, true)
        .setColor('0x206694')
        .setThumbnail('https://i.gifer.com/origin/a6/a6b6c68285b2389353c579c87ad9c1d3.gif')
        .setFooter('Made by Nimbi#4961', 'https://cdn.discordapp.com/avatars/465228604721201158/a_7c9eb1d6a8e7fab650a835db33b2b28f.gif?size=1024')
    message.channel.send({ embed: echo })
        ;
}

module.exports.details = {
    name: 'Echo',
    author: 'Nimbi#4961',
    icon: 'https://cdn.discordapp.com/avatars/465228604721201158/a_7c9eb1d6a8e7fab650a835db33b2b28f.gif?size=1024',
    description: 'Get the bot\'s current ping.',
    usage: prefix.prefix + 'echo'
}
