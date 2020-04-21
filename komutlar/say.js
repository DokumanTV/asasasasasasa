const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    var toplamEtiketliUyeler = message.guild.members.filter(member => member.user.username.includes("仒")).size
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "✔️");
  const nooraembed = new Discord.RichEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`<a:pin:701864839508918332> **Ses kanallarında ${count} kişi bulunmaktadır.**`, ` <a:mavitik:701864840536260700> **Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.**`)
        .addField(`<a:ucgenn:701864662932652132> Taglı Üye Sayısı.`,`<a:gokalp:701865129133998232> Taglı Üyede ${toplamEtiketliUyeler} kişi bulunmaktadır.`)
        .setThumbnail("https://cdn.discordapp.com/attachments/697533814892658770/702118734172782633/ezgif.com-crop_2.gif")
  message.channel.sendEmbed(nooraembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Sayıldı.',
  usage: 'say'
}; 