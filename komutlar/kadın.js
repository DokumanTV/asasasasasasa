const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "705854558596890707"); //buraya kadın rolünüzün id'sini koyun
  const male = message.guild.roles.find(r => r.id === "705854559309922345"); //buraya kadın rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "705854562720022688"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "705854609905811536"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "yesilonay");
  if(!message.member.roles.array().filter(r => r.id === "705854552070553622")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
    c.addRole(male)
    c.removeRole(misafir)
    const embed = new Discord.RichEmbed()
    .setDescription(` **<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0x47043d")
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
   