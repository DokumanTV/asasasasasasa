const Discord = require("discord.js");
const db = require('wio.db')
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkilii  = db.fetch(`botlistyetkilirol_${message.guild.id}`)
  let yetkili = message.author;
  if(!message.member.roles.cache.has(yetkilii)) return message.channel.send(`:white_small_square: Bu Komudu Kullanabilmen İçin <@${yetkilii}> Rolüne Sahip Olmalısın! Degilsen !botlist-yetkili-rol @rol`)
  let sahip = message.guild.members.cache.get(args[0]);
  let botisim = message.guild.members.cache.get(args[1]);
  let botisim2 = args[1];
  let prefix = args[2];
  let isim = client.users.cache.get(args[1]);
  let log = db.fetch(`ardeeks_${message.guild.id}`) 
  let rol = db.fetch(`anan123_${message.guild.id}`)  
let b = db.fetch(`xfixxy-ardeeks_${message.guild.id}`)  

  if (!sahip)
    return message
      .reply(`Bir kullanıcı id girmelisin.`)
      .then(msg => msg.delete(5000));
  const botid = args[1];
  if (!botid)
    return message
      .reply(`Hani bot id neyi onaylicam?`)
  .then(msg => msg.delete(5000));
  message.delete();
  sahip.roles.add(rol);
  message.guild.members.cache.get(botisim2).setNickname(``);
  botisim.roles.add(b);
  let embedd = new Discord.MessageEmbed().setDescription(
    ` :white_small_square: | **Tebrikler!** ${botisim} **İsimli Botun Onaylandı.Developer Rolün Başarı ile Verildi** \n\n  :white_small_square: | **Onaylayan Yetkilimiz =** ${yetkili} ` );
  sahip.send(embedd);
  let embed2 = new Discord.MessageEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` :white_small_square: | ${sahip} **İsimli kişinin** ${botisim} **adlı botu onaylandı.** \n\n  :white_small_square: | **Onaylayan Yetkilimiz =** ${yetkili} `
);
  client.channels.cache.get(log).send(embed2);
};
//youtube.com/Ardééks
//teşekkürler xFixxy
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-onayla", "onayla","kabulet","kabul","onay"],
  permLevel: 0
};

exports.help = {
  name: "botonayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};