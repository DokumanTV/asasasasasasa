const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    let tag = "仒"; // tagınız
    let sunucu = "701809569411760160"; //sunucu ID
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "mavimsitik");
  const arvelosembed = new Discord.RichEmbed()
  .setDescription(" **Sunucu İstatistikleri** ")
  .addField("<a:gokalp:701865129133998232> **Sunucuda Bulunan Üye Sayısı** ",message.guild.memberCount)
    .addField("<a:gokalp:701865129133998232> **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .addField("<a:gokalp:701865129133998232> **Ses Kanallarında Bulunan Üye Sayısı** ", `${count}`)
    .addField("<a:gokalp:701865129133998232> **Tagımızı Alan Üye Sayısı** ",
      message.guild.members.filter(m => m.user.username.includes("仒")).size
    ) 
    .setFooter(client.user.username, message.guild.iconURL);
  message.channel.sendEmbed(arvelosembed)
    message.react(emoji)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//DARKCODE
exports.help = {
  name: '2say',
  description: 'sunucuyu sayar.',
  usage: '2say'
//DarkCode 
};