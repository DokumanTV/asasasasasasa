const Discord = require("discord.js");
    exports.run = async (client, message, args) => {
      try {
        let kişi = message.mentions.users.first();
        const hataembed = new Discord.MessageEmbed()
          .setColor("0x36393e")
          .setTimestamp()
          .addField("HATA:", "Lütfen Birisini Etiketle ve Bir Yazı Yaz!");
     let userid;
  if(isNaN(args[0])) {
    if (!kişi) {
      message.reply(hataembed)
    } else {
      userid = kişi.id;
    }
  } 
        let yazi = args.slice(1).join(" ");
        if (!yazi) return message.reply(hataembed);

        if (message.content.includes("@everyone")) return message.reply("Fakemesaj Everyone İçeremez Şakacı Jojuk Seni");
            if (message.content.includes("@here")) return message.reply("Fakemesaj Here İçeremez Şakacı Jojuk Seni");

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