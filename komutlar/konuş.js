const Discord = require("discord.js");
const konuş = require("google-tts-api");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
exports.run = (client, message) => {
      const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send(`İlk önce bir sesli kanala girmeniz gerek`)
    konuş (`${args.slice(' ')}`, 'tr', 1).then(url => {
        message.member.voice.channel.join().then(connection => {
            message.channel.send(`**${args.slice(' ')}** adlı mesaj sesli olarak söyleniyor`)
            connection.play(url).on("end", () => {
                connection.disconnect();
            })
        })
    })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 1
};
exports.help = {
    name: 'söyle',
    description: 'Bota yazdığınız şeyi sesli mesaj olarak söyletir',
    usage: 'söyle '
};