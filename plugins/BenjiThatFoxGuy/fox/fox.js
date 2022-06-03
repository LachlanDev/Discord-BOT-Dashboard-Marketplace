const discord = require ("discord.js");
const prefix = require('../config/config.json')
const fetch = require("node-fetch");

module.exports.run = (client, message, args) =>{
    let uri = "https://randomfox.ca/floof/";
    fetch(uri)
    .then(response => response.json())
    .then(json => {
        const fox = new discord.MessageEmbed()
        .setColor('#b434eb')
        .setTitle('Fox')
        .setImage(json.image)
        .setFooter("Made by BenjiThatFoxGuy#9031", "https://cdn.discordapp.com/avatars/263241553072488448/630f6bf41d602ff5e6319d20a31b96b8")
        message.channel.send({embed:fox})
    });
}

module.exports.details = {
    name:'Fox',
    author:'BenjiThatFoxGuy#9031',
    icon:'https://cdn.discordapp.com/avatars/263241553072488448/630f6bf41d602ff5e6319d20a31b96b8',
    description:'Sends a random image of a fox.',
    usage:`${prefix.prefix}fox`
}