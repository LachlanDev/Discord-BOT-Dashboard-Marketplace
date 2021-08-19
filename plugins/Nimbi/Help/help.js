const discord = require("discord.js");
const { prefix, admin_help, mod_help, fun_help, info_help, util_help } = require('../config/config.json')

module.exports.run = (client, message, args) => {
    const help_embed = new discord.MessageEmbed()

        .setTitle('Help')
        .setDescription(
            'Here are my available commands\n\n\\⚙️ Administration: [Link]('
            + admin_help +
            ')\n\\🛠️ Moderation: [Link]('
            + mod_help +
            ')\n\\🤣 Fun: [Link]('
            + fun_help +
            ')\n\\📰 Information: [Link]('
            + info_help +
            ')\n\\🧰 Utility: [Link]('
            + util_help +
            ')'
            )

    message.channel.send({ embed: help_embed })
}

module.exports.details = {
    name: 'Help',
    author: 'Nimbi#4961',
    icon: 'https://images-ext-2.discordapp.net/external/XM6hU7CC3Gm-sm8B_6XVO8FlDfWNTgafpex9zxvTrpk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/465228604721201158/a_7c9eb1d6a8e7fab650a835db33b2b28f.gif',
    description: 'A Simple Help Command',
    usage: `${prefix}help`
}