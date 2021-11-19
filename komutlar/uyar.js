const Discord = require("discord.js");
const fs = require("fs");
const db = require("croxydb");
const generator = require("generate-password");

exports.run = (client, msg, args) => {
  if (!msg.member.hasPermission("MANAGE_MESSAGES"))
    return msg.reply(
      `Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` İznine Sahip Olmalısın!`
    );

  let user = msg.mentions.members.first();
  let reason = args.slice(1).join(" ");

  if (!user) return msg.reply("**Uyaracağın Kişiyi Etiketlemelisin!**");
  if (!reason) return msg.reply("**Uyarma Sebebini Yazmalısın!**");
  if (user.id === msg.author.id)
    return msg.reply("**Kendini Uyaramazsın!**");
  if (user.user.bot) return msg.reply("**Botları Uyaramazsın!**");

  if (
    msg.guild.members.get(user.id).highestRole.calculatedPosition >
    msg.member.highestRole.calculatedPosition
  )
    return msg.channel.send(
      `**Bu Kişinin Rolü Senin Rolünden Daha Yüksek!**`
    );

  
    user.send(
      `<@${user.id}>, \n**${msg.guild.name}** Adlı Sunucuda **${reason}** Sebebi İle Uyarıldın! \nKuralları Çiğnemeye Devam Eder İsen Susturulabilir, Atılabilir Veya Yasaklanabilirsin!`
    );

    const cse = new Discord.RichEmbed()
      .setTitle("Code Share Uyarı Sistemi")
      .setColor("BLUE")
    .setThumbnail(msg.guild.iconURL)
      .setDescription(
        `<@${user.id}> Adlı Kullanıcı **${reason}** Sebebi İle Başarıyla Uyarıldı!`
      )
      .setTimestamp()
      .setFooter("Made By. Code Share");
    msg.channel.send(cse);
  
  db.add(`uyarılar_${user.id}`, 1);

  var password = generator.generate({
    length: 10,
    numbers: true
  });

  var array = [];
  var kontrol2 = [];
  let komutlar = JSON.parse(fs.readFileSync("./uyarılar.json", "utf8"));
  var altkomut = "";

  if (komutlar[msg.guild.id + "-" + user.id]) {
    for (
      var i = 0;
      i < Object.keys(komutlar[msg.guild.id + "-" + user.id]).length;
      i++
    ) {
      if (
        password ===
        Object.keys(komutlar[msg.guild.id + "-" + user.id][i]).toString()
      ) {
        array.push(
          JSON.parse(
            `{"${
              Object.keys(komutlar[msg.guild.id + "-" + user.id][i])[0]
            }": "${reason}"}`
          )
        );
      } else {
        array.push(
          JSON.parse(
            `{"${
              Object.keys(komutlar[msg.guild.id + "-" + user.id][i])[0]
            }": "${
              komutlar[msg.guild.id + "-" + user.id][i][
                Object.keys(komutlar[msg.guild.id + "-" + user.id][i])
              ]
            }"}`
          )
)
      }
      kontrol2.push(
        Object.keys(komutlar[msg.guild.id + "-" + user.id][i])[0].toString()
      );
    }
    if (!kontrol2.includes(password)) {
      array.push(JSON.parse(`{"${password}": "${reason}"}`));
      komutlar[msg.guild.id + "-" + user.id] = array;

      fs.writeFile("./uyarılar.json", JSON.stringify(komutlar), err => {
        console.log(err);
      });

      return;
    } else {
      komutlar[msg.guild.id + "-" + user.id] = array;
      fs.writeFile("./uyarılar.json", JSON.stringify(komutlar), err => {
        
        console.log(err);
      });
      return;
    }
  } else {
    array.push(JSON.parse(`{"${password}": "${reason}"}`));
    komutlar[msg.guild.id + "-" + user.id] = array;
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