const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const log = message.guild.channels.find(c => c.id === "707298334964187178"); //buraya kayıt log id koyun
  const tag = "ꋹ";//YAZMAK İSTERSENİZ TAGINIZ ( BOŞ BIRAKABİLİRSİNİZ )
  const dogrulandi = client.emojis.find(emoji => emoji.name === "volantistac");
  if(!message.member.roles.array().filter(r => r.id === "707298284074434640")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setDescription(`<a:yukleniyor:707663668325777454> **<@${c.user.id}>** kişinin yeni adı **${tag} ${nick} | ${yas} !**`)
    .setColor("0xf3f5a7")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};
exports.help = {
  name: "nick", 
  name: "isim",
  description: "",
  usage: ""
};
   