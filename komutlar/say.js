const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": ":0_:",
  "1": ":1_:",
  "2": ":2_:",
  "3": ":3_:",
  "4": ":4_:",
  "5": ":5_:",
  "6": ":6_:",
  "7": ":7_:",
  "8": ":8_:",
  "9": ":9_:",
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};
let tags = ''
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  
  let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let online = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
  let offline2 =  '**Çevrimiçi Kişi:** ' +
     `${online}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

const embed = new Discord.MessageEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('0x36393e  ')
.setDescription('' + sunucu + '\n \n' + offline2 + '\n \n' + offline)
.setFooter('')

  message.channel.send(embed)
  let onnl = `**Toplam Üye:** ${sunucu}\n**Aktif Üye:** ${offline2}}`
message.channel.setTopic(onnl)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};