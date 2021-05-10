

const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
  .then(response => {
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.cache.size < 1) return message.reply('Kime ateş edeceksen etiketlemelisin.').catch(console.error);
    message.channel.send('Ateş ediliyor....')
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
    var Random = [
    'Reiz sen ne yaptın? Adam öldü.',
    'Cazibene dayanamayıp adam kendini öldürdü.',
    'Adam yoğun bakımda, Kaç.',
        'Iskaladın tekrar dene.',
    ];
    var kafasınasık = Math.floor(Math.random() * Random.length);
let embed = new Discord.MessageEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
    message.channel.send(embed)
      return });
  
};


exports.conf = {
    enabled: true,
    guildOnly: true,
  aliases: ['ateş','ateşet'],
  kategori: 'eğlence',
    permLevel: 0
};

exports.help = {
    name: 'ateş-et',
    description: 'İstediğiniz kişinin kafasına sıkar.',
    usage: 'ateş-et <@kullanıcı>]'
};