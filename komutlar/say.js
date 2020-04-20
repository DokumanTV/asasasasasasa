const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    var toplamEtiketliUyeler = message.guild.members.filter(member => member.user.username.includes("金")).size
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "✔️");
  const nooraembed = new Discord.RichEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`🔊 **Ses kanallarında ${count} kişi bulunmaktadır.**`, ` 🔔 **Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.**`)
        .addField(`:fleur_de_lis: Taglı Üye Sayısı.`,`:cyclone: Taglı Üyede ${toplamEtiketliUyeler} kişi bulunmaktadır.`)
 
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