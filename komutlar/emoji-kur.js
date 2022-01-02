const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komut sunucu sahibine özeldir!')

  if (!args[0]) {
message.channel.send("Lütfen -emojikur bilgi kullanınız.")
}
  
  if (args[0] === "bilgi") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("")
        .setColor("RANDOM")
        .setFooter(`${message.author.tag} Için Istendi`, client.user.avatarURL())
        .setTimestamp()
        .addField(
          "**__EMOJİKUR HAZIRLIK__**",
          ` Emoji Kurulum Öncesi Mutlaka Bota Yönetici Yetkisi Veriniz.\nSunucunun Emoji Slotunun Boş Olduğundan Emin Olunuz.\nSonraki Aşama Için -emojikur kurulum Yazınız.`
        )
    );
  }

  if (args[0] == "kurulum") {
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("")
        .setColor("RANDOM")
        .setFooter(`${message.author.tag} Için Istendi`, client.user.avatarURL())
        .setTimestamp()
        .addField(
          "**__EMOJİKUR KURULUM AŞAMASI__**",
          ` Emoji Kurulum Öncesi Aşamalar Tamamlandı ise Komutu Giriniz;\n**-emojikur başlat** `
        )
    );
  }

  if (args[0] == "başlat")
    message.channel.send(
      `Kurulum Başlatılsın mı? \n**evet** olarak cevaplayınız...\n10 Saniye Sonra Iptal Edilir.`
    );
  message.channel
    .awaitMessages(response => response.content === "evet", {
      max: 1,
      time: 10000,
      errors: ["time"]
    })
    .then(collected => {
      message.channel.send("Kurulum Başlatılıyor..");

      message.guild
        .emojis.create(`https://discordsunucu.com/images/emoji_list/ban.png`, "banned")
        .then(tm => {
          message.channel.send("Emoji oluşturuldu");
        })
        .catch(error => {
          message.channel.send("Hata oluştu!\n\n" + error);
        })
        .then(Emoji =>
          message.guild
            .emojis.create(`https://emoji.discord.st/emojis/65033a38-b3bd-4aa5-8783-63fcfc07171d.gif`, "kedi")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://minecrafttr.com/data/attachments/16/16107-53434a7c3fb191763aba60ed51d9c7ce.jpg`, "neblm")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        
          message.guild
            .emojis.create(
              `https://minecrafttr.com/data/attachments/5/5044-78ddeec2035825f95695ce3513b1b167.jpg`,
              "bosyapma"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        
        
          message.guild
            .emojis.create(`https://minecrafttr.com/data/attachments/5/5045-a0c1809a7da9faf8a6759af1899391dd.jpg`, "hanımcılık")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://minecrafttr.com/data/attachments/16/16109-fda2351c44230ab5a5c400acc0806915.jpg`,
              "lancazyapma"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://emoji.gg/assets/emoji/4862-ban-hammer.png`, "ban")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://emoji.gg/assets/emoji/1391_fail.png`, "fail")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.gg/assets/emoji/4426_number4.png`,
              "number4"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.discord.st/emojis/b00423e9-d847-4401-b22b-9c93ad19e27b.png`,
              "ooo"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.gg/assets/emoji/2635_number1.png`,
              "number1"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://www.seekpng.com/png/full/186-1867826_pandaelf-discord-emoji-discord-elf.png`,
              "noel"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`http://clipart.coolclips.com/480/vectors/tf05185/CoolClips_vc016111.png`, "rip")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.gg/assets/emoji/6079_Na_ni.png`,
              "nani"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.gg/assets/emoji/3946_DeadChat.png`,
              "deadchat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://emoji.gg/assets/emoji/6203_well_fuck.png`, "wellfuck")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://store.donanimhaber.com/b2/c5/bd/b2c5bda29aebafdb143c1a893d088198.png`,
              "türkiye"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://stickerly.pstatic.net/sticker_pack/nTMoF8lzdyKiGGXldvxwPg/TRTQB2/7/89561ae1-3ef4-4a7b-9f35-e5c44734d0a5.png`, "eyw")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://minecrafttr.com/data/attachments/16/16108-3a3758e9b6f9887e526366a6de366400.jpg`, "içiyonmu")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://preview.redd.it/vl4ftf6mghr51.png?width=640&crop=smart&auto=webp&s=b0059006aee7cf014fac5d1557421fe69a86b70f`,
              "utangaç"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.pinimg.com/originals/a0/50/1e/a0501e0c5659dcfde397299e4234e75a.gif`,
              "disco"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.discord.st/emojis/c1f543ec-27f4-4dc2-baf0-5c5dcb038d17.gif`,
              "kedi"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.discord.st/emojis/74a2c7e5-1a1b-4c87-b562-17352a3fe8c5.gif`,
              "yıldız"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
  })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://emoji.discord.st/emojis/c447335e-1b5f-4c88-87b4-c75405c0756d.gif`,
              "gidiom"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://emoji.discord.st/emojis/a4a213a0-76c3-4700-81a3-6282a7ed1719.gif`, "tatlıs")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.kym-cdn.com/photos/images/original/001/622/377/827.png`, "a")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riHwk1.png`,
              "salak"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/riHAwG.png`, "lol")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riLC0P.gif`,
              "dance"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riL5Z0.png`,
              "kovboy"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riLNLy.png`,
              "saskincat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/riLmL1.png`, "amen")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riL2bb.png`,
              "patladik"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riNP2y.gif`,
              "dance2"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/riNRmn.png`, "stop")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riNTmG.gif`,
              "dance3"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riO81e.png`,
              "nocat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riOFxP.png`,
              "rifcat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riOMpq.png`,
              "bloodguncat"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rijPxh.png`,
              "eywreyiz"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rijyK1.png`,
              "coolka"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rijxDG.png`,
              "assaas"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rijehj.gif`,
              "dance4"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rij3lo.png`,
              "saassa"
            )
              .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/rijlEU.png`, "neee")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rij4Gf.png`,
              "uzgunsad"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/rijwhb.png`, "sadd")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(`https://i.imgyukle.com/2020/05/05/rij0ls.png`, "ne3")
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/rijARQ.png`,
              "parabanka"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        )
        .then(Emoji =>
          message.guild
            .emojis.create(
              `https://i.imgyukle.com/2020/05/05/riXP2c.gif`,
              "200iq"
            )
            .then(tm => {
              message.channel.send("Emoji oluşturuldu");
            })
            .catch(error => {
              message.channel.send("Hata oluştu!\n\n" + error);
            })
        );
  message.channel.send("Tamamlandı")
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji"],
  permLevel: 0
};

exports.help = {
  name: "emojikur",
  description: "Espri yapar.",
  usage: "emojikur bilgi"
};