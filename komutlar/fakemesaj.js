const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send('Lütfen birisini etiketle')
    {
        try {
            const webhooks = await message.channel.fetchWebhooks();
        
            const webhook = webhooks.first();
            const msg = args.slice(1).join(" ");
            if(!msg) return message.reply('bir şeyler yaz')
              await webhook.send(msg , {
                username: message.author.username,
                avatarURL: message.author.avatarURL()(),
              
            });
        } catch (error) {
            console.error('Error trying to send: ', error);
        }}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fakemesaj",
  description: "fakemesaj",
  usage: "fakemesaj"
};