
const discord = require('discord.js');

exports.run = async(client, message, args) => {
     
    if(message.guild === null) {
        return
    }
    
if(!message.member.hasPermission("ADMINISTRATOR")) {
    const yetkinyokembed = new discord.MessageEmbed()
    .setAuthor("❌ Yetersiz Yetki!")
    .setColor("RED")
    .setDescription("**Bu Komudu Kullanabilmek İçin `Yönetici` İznine İhtiyacın Var!**")
    return message.channel.send(yetkinyokembed)
}
if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
    const yetkimyokbruh = new discord.MessageEmbed()
    .setAuthor("❌ Yetkim Yetersiz!")
    .setDescription("**Bu İşlemi Gerçekleştirebilmem İçin `Kanalları Yönet` İznine İhtiyacım Var!**")
    .setColor("RED")
    return message.channel.send(yetkimyokbruh)
}
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    channels.forEach(async (channel) => {
        if(channel.deletable) {
            await channel.clone().catch(e => console.log(e))
            await channel.delete().catch(e => console.log(e))
        }
    });
 
};

exports.conf = {
  enabled: true,
  aliases: [ 'guild-reset'],
};

exports.help = {
  name: 'guild-reset',
  description: 'Guild Reset Komudu.',
  usage: 'guild-reset'
};
