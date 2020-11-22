const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "772077147921449011"); //buraya kadın rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "👧"); //buraya kadın rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "772074648929566721"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "772075615989923850"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === ":tik:"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "772077197993050153")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
    .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0xff5cf3")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
   