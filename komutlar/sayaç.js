const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
    if(args[0] !== "sıfırla"){
      var kanal = message.mentions.channels.first();
      if(!kanal) return message.reply("Kanalı Etiketlermisin")
      var sayı = args[1]
      if(!sayı) return message.reply("Bir Sayı Ayarlayın")
      if(isNaN(sayı)) return message.reply("Bir Hata Oluştu Lütfen Harf Şeklinde Değil Sayı Şeklinde Yapın Hala Bu Hatayla Karşılaşıyorsanız Destek Sunucumuza gelip Bildirebilirsiniz")
      if(sayı < message.guild.memberCount) return message.reply("Sunucunda Daha Fazla Kişi Var")
      qdb.set(`sayackanali_${message.guild.id}`, kanal.id)
      qdb.set(`sayachedef_${message.guild.id}`, sayı)
      return message.reply("Sayaç Ayarlandı!")
    }
    if(args[0] === "sıfırla"){
      qdb.delete(`sayackanali_${message.guild.id}`)
      qdb.delete(`sayachedef_${message.guild.id}`)
      return message.reply("Sayaç Sıfırlandı")
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "sayaç",
  description: "Mesaj Siler",
  usage: "sil <mesajSayısı>"
};