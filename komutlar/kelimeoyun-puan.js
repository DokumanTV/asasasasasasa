const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {
const balance = await db.fetch(`ktbalance_${message.author.id}_d0ru`)
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} puanın karşında!`, message.author.avatarURL())
        .setDescription(`•               \**${balance  || 0}\**\n`)
        .setFooter(`${client.user.username} ` + 'Kelime tahmini sistemi', client.user.avatarURL() )
    return message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
};

exports.help = {
  name: 'kt-puan',
  description: 'Döküman Tv Ye Aittir Aksini İdda Eden Kedidir.',
  usage: 'kt-puan'
};
   