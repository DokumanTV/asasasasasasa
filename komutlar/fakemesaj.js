const Discord = require("discord.js");
    exports.run = async (client, message, args) => {
      try {
         if (message.deletable) await message.delete();
         if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`${message.author} \`Webhookları Yönet\` iznim yok.`).then(a => a.delete({timeout: 4500}));
         let kişi = message.mentions.users.first();
         const hataembed = new Discord.MessageEmbed()
          .setColor("0x36393e")
          .setTimestamp()
          .addField("HATA:", "Lütfen Birisini Etiketle ve Bir Yazı Yaz!");
        if (message.mentions.users.size < 1) return message.reply(hataembed);
        let yazi = args.slice(1).join(" ");
        if (!yazi) return message.reply(hataembed);

        if (message.content.includes("@everyone")) return message.reply("Everyone mu? Severiz, şaka şaka bir daha bunu yapma.");
            if (message.content.includes("@here")) return message.reply("Here mi? Severiz, şaka şaka bir daha bunu yapma.");

       message.delete();      
      message.channel
          .createWebhook(kişi.username, {
            avatar: kişi.avatarURL()
          })
          .then(hook => {
            hook.send(yazi).then(() => hook.delete())
          })
        
          .catch(console.error);
      } catch (err) {
        console.error(err)
      }
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