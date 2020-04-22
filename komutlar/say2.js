const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    let tag = "仒"; // tagınız
    let sunucu = "701809569411760160"; //sunucu ID
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "mavimsitik");
  const arvelosembed = new Discord.RichEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/697533814892658770/702118734172782633/ezgif.com-crop_2.gif")
  .setDescription(" **Sunucu İstatistikleri** ")
  .addField("<a:ucgenn:701864662932652132> **Sunucuda Bulunan Üye Sayısı** ",message.guild.memberCount)
    .addField("<a:bluestar:701864543692914790>  **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .addField("<a:elmas2:701864531835748483> **Ses Kanallarında Bulunan Üye Sayısı** ", `${count}`)
    .addField("<a:gokalp:701865129133998232> **Taglı Üye Sayısı** ",
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
//say
exports.help = {
  name: 'say',
  description: 'sunucuyu sayar.',
  usage: 'say'
//say
};