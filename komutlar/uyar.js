const Discord = require("discord.js");
const fs = require("fs");
const db = require("croxydb");
const generator = require("generate-password");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      `Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` İznine Sahip Olmalısın!`
    );

  let user = message.mentions.members.first();
  let reason = args.slice(1).join(" ");

  if (!user) return message.reply("**Uyaracağın Kişiyi Etiketlemelisin!**");
  if (!reason) return message.reply("**Uyarma Sebebini Yazmalısın!**");
  if (user.id === message.author.id)
    return message.reply("**Kendini Uyaramazsın!**");
  if (user.user.bot) return message.reply("**Botları Uyaramazsın!**");

  if (
    message.guild.members.get(user.id).highestRole.calculatedPosition >
    message.member.highestRole.calculatedPosition
  )
    return message.channel.send(
      `**Bu Kişinin Rolü Senin Rolünden Daha Yüksek!**`
    );

  
    user.send(
      `<@${user.id}>, \n**${message.guild.name}** Adlı Sunucuda **${reason}** Sebebi İle Uyarıldın! \nKuralları Çiğnemeye Devam Eder İsen Susturulabilir, Atılabilir Veya Yasaklanabilirsin!`
    );

    const cse = new Discord.RichEmbed()
      .setTitle("Code Share Uyarı Sistemi")
      .setColor("BLUE")
    .setThumbnail(message.guild.iconURL)
      .setDescription(
        `<@${user.id}> Adlı Kullanıcı **${reason}** Sebebi İle Başarıyla Uyarıldı!`
      )
      .setTimestamp()
      .setFooter("Made By. Code Share");
    message.channel.send(cse);
  
  db.add(`uyarılar_${user.id}`, 1);

  var password = generator.generate({
    length: 10,
    numbers: true
  });

  var array = [];
  var kontrol2 = [];
  let komutlar = JSON.parse(fs.readFileSync("./uyarılar.json", "utf8"));
  var altkomut = "";

  if (komutlar[message.guild.id + "-" + user.id]) {
    for (
      var i = 0;
      i < Object.keys(komutlar[message.guild.id + "-" + user.id]).length;
      i++
    ) {
      if (
        password ===
        Object.keys(komutlar[message.guild.id + "-" + user.id][i]).toString()
      ) {
        array.push(
          JSON.parse(
            `{"${
              Object.keys(komutlar[message.guild.id + "-" + user.id][i])[0]
            }": "${reason}"}`
          )
        );
      } else {
        array.push(
          JSON.parse(
            `{"${
              Object.keys(komutlar[message.guild.id + "-" + user.id][i])[0]
            }": "${
              komutlar[message.guild.id + "-" + user.id][i][
                Object.keys(komutlar[message.guild.id + "-" + user.id][i])
              ]
            }"}`
          )
        );
      }
      kontrol2.push(
        Object.keys(komutlar[message.guild.id + "-" + user.id][i])[0].toString()
      );
    }
    if (!kontrol2.includes(password)) {
      array.push(JSON.parse(`{"${password}": "${reason}"}`));
      komutlar[message.guild.id + "-" + user.id] = array;

      fs.writeFile("./uyarılar.json", JSON.stringify(komutlar), err => {
        console.log(err);
      });

      return;
    } else {
      komutlar[message.guild.id + "-" + user.id] = array;
      fs.writeFile("./uyarılar.json", JSON.stringify(komutlar), err => {
        
        console.log(err);
      });
      return;
    }
  } else {
    array.push(JSON.parse(`{"${password}": "${reason}"}`));
    komutlar[message.guild.id + "-" + user.id] = array;
    fs.writeFile("./uyarılar.json", JSON.stringify(komutlar), err => {
      console.log(err);
    });

    return;
  }
};

exports.conf = {
  aliases: ["warn", "uyarı-ver"]
};

exports.help = {
  name: "uyar"
};