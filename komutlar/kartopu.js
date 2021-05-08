const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  let kartopu = args.slice(0).join(' ');
        if (kartopu.length < 1) {
        return msg.reply('Kime Kar Topu Atıcaksan Etiketle');
            } else {
              msg.channel.send('<=====     :snowflake:')
              .then(nmsg => nmsg.edit('<=====    :snowflake:'))
.then(nmsg => nmsg.edit('<====    :snowflake:'))
              .then(nmsg => nmsg.edit('<====    :snowflake:'))
.then(nmsg => nmsg.edit('<===   :snowflake:'))
              .then(nmsg => nmsg.edit('<===   :snowflake:'))
.then(nmsg => nmsg.edit('<==  :snowflake:'))
              .then(nmsg => nmsg.edit('<==  :snowflake:'))
.then(nmsg => nmsg.edit('<= :snowflake:'))
              .then(nmsg => nmsg.edit('<= :snowflake:'))
.then(nmsg => nmsg.edit(':snowflake:'))
              .then(nmsg => nmsg.edit(':snowflake:'))
.then(nmsg => nmsg.edit(`${kartopu} artık ⛄ oldu.`));

       
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kartopu',
  description: 'kartopu atarsınız',
  usage: 'kartopu @kullanıcı'
}; 