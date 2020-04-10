const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
const tag = "YAZMAK İSTERSENİZ TAGINIZ ( BOŞ BIRAKABİLİRSİNİZ )";
    if(!message.member.roles.array().filter(r => r.id === "KAYIT SORUMLUSU ROL İD")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
    } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
  const c = message.guild.member(member)
  const nick = args[1];
  const yas = args[2];
  const tag = args[2];
    if(!nick) return message.channel.send("Bir isim girin.")
   if(!yas) return message.channel.send("Bir yaş girin.")
   c.setNickname(`${tag} ${nick} , ${yas}`)
   const embed = new Discord.RichEmbed()
  .addField(`• Kullanıcının takma adı değiştirildi.}\``)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)  
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isim'],
  permLevel: 0
}
exports.help = {
  name: 'isim ',
  description: "Birinin nickini değiştirir.",
  usage: 'isim <yeni nick>'

  } 
  
}