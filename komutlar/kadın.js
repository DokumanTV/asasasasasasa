const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "705796541482532926"); //buraya kadın rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "705796541054713877"); //buraya kadın rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "705787134623088760"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "705783164366225480"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "whitec");
  if(!message.member.roles.array().filter(r => r.id === "705785405550755902")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
    .setThumbnail("https://media.tenor.com/images/f7d1b9c9a5c36e027aa02e31ec8b235c/tenor.gif")
    .setDescription(` **<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("GREEN")
    .setFooter(client.user.username, message.guild.iconURL);
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
  name: "kadın",
  description: "",
  usage: ""
};
   