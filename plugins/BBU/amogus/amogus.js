const discord = require ("discord.js");
const prefix = require('../config/config.json')

var amogusImage = [
    "https://cdn.discordapp.com/attachments/797816795796078612/833643168708165672/image0.jpg",
    "https://cdn.discordapp.com/attachments/797816795796078612/833643017461956608/image0.jpg",
    "https://tenor.com/view/sus-gif-20302681",
    "https://cdn.discordapp.com/attachments/722515219405864990/832222779948531722/1635407_aeroburger_amogus.png",
    "https://cdn.discordapp.com/attachments/722515219405864990/832223315141328916/1613553866_untitled-design-6.png",
    "https://media.discordapp.net/attachments/832223538894340096/832223697707728896/image0.jpg?width=971&height=348",
    "https://cdn.discordapp.com/emojis/806559919326494720.gif?v=1&size=40",
    "https://cdn.discordapp.com/attachments/797816795796078612/832223893661155367/image0.jpg",
    "https://cdn.discordapp.com/attachments/832223538894340096/832223994027311144/image0.jpg",
    "https://cdn.discordapp.com/attachments/832223538894340096/832224070007128064/image0.jpg",
    "https://media.discordapp.net/attachments/832223538894340096/832223800036687872/image0.jpg",
    "https://tenor.com/view/19dollar-fortnite-card-among-us-amogus-sus-red-among-sus-gif-20549014",
    "https://tenor.com/view/amogus-gif-20493219",
    "https://tenor.com/view/among-us-gif-18676023",
    "https://tenor.com/view/jeremy-clarkson-laughing-laughing-hysterically-at-you-bahaha-gif-19955692",
    "https://cdn.discordapp.com/attachments/495286269459300364/833640133261000704/sus_asylum.mp4",    
    "https://tenor.com/view/what-bruh-steve-harvey-shocked-surprised-gif-17654826",
    "https://tenor.com/view/among-us-gif-18568799",
    "Im getting sick of this shit, go do something else",
    "STOOOOP",
    "No more amogus for you",
    "https://cdn.discordapp.com/attachments/822539043069886484/829802935722180628/169999530_1186849405091468_3908482116206678105_n.mp4",
    "https://cdn.discordapp.com/attachments/495286269459300364/829740387303424070/video0-9.mp4",
    "https://media.discordapp.net/attachments/685634992025763910/833581006555447366/amogus.gif?width=492&height=492",
    "https://media.discordapp.net/attachments/801141924546740264/833702276517593138/Screenshot_20210419-192112_YouTube.png?width=842&height=585",
    "https://images-ext-2.discordapp.net/external/k7TVovoYBWGhjWoRyG0rzH7ZWw8-No6GOsLXxScevxY/https/media.discordapp.net/attachments/638842430845747234/833733167231533087/833692387771285514.png",
    "https://tenor.com/view/amogus-whip-and-nae-nae-whip-nae-nae-among-us-gif-20404417",
    "https://media.discordapp.net/attachments/495286269459300364/835263262034886666/image0-2.gif",
    "https://media.discordapp.net/attachments/471091380043644939/832641662568103956/image0-3.gif"
    

]   

module.exports.run = (client, message, args) => {
    try {
    randomMessage = amogusImage[Math.floor(Math.random() * amogusImage.length)];
    message.channel.send(randomMessage)
} catch (error) {
    const embederr = new discord.MessageEmbed()
        .setColor('#FF0000')
        .addField("An error has occured", "contact ATD#9262")
        message.channel.send({embed: embederr }) }
}
module.exports.details = {
    name:'amogus',
    author:'ATD#9262',
    description: 'getitoutofmyhead',
    usage:`${prefix.prefix}amogus`,
}
