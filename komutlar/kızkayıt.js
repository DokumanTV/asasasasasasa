const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "698152282331676719"); //buraya kız rolünüzün id'sini koyun
  const emoji = message.guild.roles.find(r => r.id === "698152288824590376"); //buraya kız rolünüzün id'sini koyun
  const female = message.guild.roles.find(r => r.id === "698152288149045251"); //buraya kız rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "698152284210593823"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "698230121911287879"); //buraya kayıt log id koyun
  const tag = "∻";
  if(!message.member.roles.array().filter(r => r.id === "698152290225487892")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(kayıtlı)
    c.addRole(emoji)
    c.addRole(female)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Tamamlandı İyi Eğlenceler Dileriz.")
    .setFooter("-VΞGA | kayıt sistemi")
    .setColor("WHITE")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız", "k"],
  permLevel: 0
};

exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   