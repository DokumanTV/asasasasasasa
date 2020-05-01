const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "705785404586065941"); //buraya erkek rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "705785405169205288"); //buraya erkek rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "705049185929396258"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "705783164366225480"); //buraya kayıt log id koyun
  const tag = "★";//YAZMAK İSTERSENİZ TAGINIZ ( BOŞ BIRAKABİLİRSİNİZ )
  const dogrulandi = client.emojis.find(emoji => emoji.name === "space");
  if(!message.member.roles.array().filter(r => r.id === "705049171253788783")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
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
    c.addRole(male)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setDiscription("🔱 Erkek Üye Kaydı Yapıldı 🔱")
    .setFooter("Hak Ettiğiniz Gibi Bir Gün Dileriz.")
    .setThumbnail("https://cdn.discordapp.com/attachments/704492532427522128/705125025233240171/ezgif.com-crop_13.gif")
    new Discord.Attachment("https://cdn.discordapp.com/attachments/701587735114154074/705685433740427274/207316.gif")
    .setColor("0xfffff1")
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
   