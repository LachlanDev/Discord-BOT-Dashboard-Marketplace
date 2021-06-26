const discord = require ("discord.js");
const prefix = require('../config/config.json')
const got = require('got')
module.exports.run = (client, message, args) =>{
   
    const embed = new discord.MessageEmbed();
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
    }).catch(console.error); 
}

module.exports.details = {
    name:'Meme',
    author:'Nolan#7327',
    icon:'https://cdn.discordapp.com/avatars/706984059183693854/182a7e09048682af7284b94db7de3614.webp',
    description: 'A simple meme command',
    usage:`${prefix.prefix}meme`
}