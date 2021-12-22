const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message

   const süre = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const mdessage = new Discord.MessageEmbed()

  .setColor('RANDOM')
  .setFooter('Pluto+  \' İstatistikler', bot.user.displayAvatarURL())
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("» **Botun Sahibi**", "<726482014877777980>| 𝑍𝑜𝑙𝑑𝑖𝑛𝑔 么 𝐵𝑙𝑒𝑎𝑐ℎ𝑒𝑟𝑠#8617 ")
  .addField("»  **Geliştirici** ","<726482014877777980>| 𝑍𝑜𝑙𝑑𝑖𝑛𝑔 么 𝐵𝑙𝑒𝑎𝑐ℎ𝑒𝑟𝑠#8617 ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", süre)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591)")
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/Jycf7FEZAa)")
  .addField("**» Voteleme sayfası**", " [Oy Ver?](https://top.gg/bot/847022035510886430/vote)")

 return message.channel.send(mdessage);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};