const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
const db = require ('quick.db')

if (!message.member.hasPermission("ADMINISTRATOR")) {

      client.users.cache.forEach(u => {
          let puan = db.fetch(`ktbalance_${u.id}_d0ru`)
        if(u.id === u.id){
db.delete(`ktbalance_${u.id}_d0ru`,puan)
        }
      })

message.channel.send(`:white_check_mark: Başariyla Tüm Kullanıcıların Puanı Silindi.`);
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kt-sıfırla',
  description: '.',
  usage: 'kt-sıfırla'
};
   