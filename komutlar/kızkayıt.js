const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "KIZ ROL İD"); //buraya kız rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "MİSAFİR ROL İD"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "KAYIT KANAL LOG İD"); //buraya kayıt log id koyun
  const tag = "∻";
  if(!message.member.roles.array().filter(r => r.id === "KAYIT SORUMLUSU ROL İD")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
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
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} , ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Tamamlandı İyi Eğlenceler Dileri.")
    .setFooter("-VΞGA | kayıt sistemi")
    .setColor("#ff00a6")
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
   