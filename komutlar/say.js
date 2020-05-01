  const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    let tag = "⍭"; // tagınız
    let sunucu = "701809569411760160"; //sunucu ID
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "space");
  const arvelosembed = new Discord.RichEmbed()
  .setThumbnail("https://i1.wp.com/66.media.tumblr.com/30f72ffefa587233884350cb81a98f5d/tumblr_prk3voibU91xlv8m3o2_540.gif?w=605&ssl=1")
  .setDescription(" **Sunucu İstatistikleri** ")
  .addField("<a:space:705787697918247023>   **Sunucuda Bulunan Üye Sayısı** ",message.guild.memberCount)
    .addField("<a:space:705787697918247023>   **Sunucudaki Aktif Üye Sayısı** ",message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
    .addField("<a:space:705787697918247023> >  **Ses Kanallarında Bulunan Üye Sayısı** ", `${count}`)
    .addField("<a:space:705787697918247023>  **Taglı Üye Sayısı** ",
      message.guild.members.filter(m => m.user.username.includes("⍭")).size
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