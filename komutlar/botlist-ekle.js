const Discord = require("discord.js");
const db = require('wio.db')
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let botID = args[0];
  let prefix = args[1];
  let basvuru = db.fetch(`Ardééks_${message.guild.id}`)  
  let eklekanal = db.fetch(`anan12_${message.guild.id}`) 
  let log = db.fetch(`ardeeks_${message.guild.id}`)  

  if (message.channel.id !== eklekanal)
    return message.channel
      .send(`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == eklekanal) {
    if (!botID)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete(10000));
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#2f3136")
      .setDescription(
        `[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=0) | ` + ` | [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=8)`,true)
      .setTitle(":white_small_square: Bot Başvurusu ")
      .addField(
        ":white_small_square: Bot Sahibi",`<@${message.author.id}>`)
      .addField(":white_small_square: Bot ID", botID)
      .addField(":white_small_square: Bot Prefix", prefix);
    client.channels.cache.get(basvuru).send(embed);
    let embed2 = new Discord.MessageEmbed().setDescription(`` + ` :rainbow: <@${message.author.id}> adlı kullanıcı <@${botID}> İsimli Botu Sıramıza Eklendi Yetkililerimiz En Yakın Zamanda Test Edecektir. \n\n    **Prefix =**   ${prefix}  `);
    client.channels.cache.get(log).send(embed2);

    message.channel.send(`:white_small_square:__**Bot ekleme isteğiniz alındı.**__`).then(msg => msg.delete(3000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekle"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
