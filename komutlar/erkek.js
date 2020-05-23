const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "712942720133365771"); //buraya erkek rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "712942720997654579"); //buraya erkek rolünüzün id'sini koyun
  const smale = message.guild.roles.find(r => r.id === "712942722838953985"); //buraya erkek rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "712942721349713932"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "713016880868229220"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "beyaztik");
  if(!message.member.roles.array().filter(r => r.id === "712942738844286977")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.addRole(smale)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
    .setDescription(`<a:mavimsitik:713025746829967400> **<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0x42fcd7")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["e"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};
   