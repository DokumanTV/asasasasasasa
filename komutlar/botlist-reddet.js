const Discord = require("discord.js");
const db = require("wio.db");
exports.run = async (client, message, args) => {
  let yetkilii  = db.fetch(`botlistyetkilirol_${message.guild.id}`)

  if(!message.member.roles.has(yetkilii)) return message.channel.send(` Bu Komudu Kullanabilmen İçin <@&${yetkilii}> Rolüne Sahip Olmalısın! Degilsen v!botlist-yetkili-rol @rol`)
  message.delete(5000);
  const sahip = args[0];
  if (!sahip)
    return message
      .reply(`Bir kullanıcı idsi girmelisin.`)
      .then(msg => msg.delete(5000));
const sebep = args.slice(1).join(" ");
  if (!sebep)
    return message
      .reply(`Bir sebep belirtmelisin.`)
      .then(msg => msg.delete(5000));
  let kanal = await db.fetch(`hgK9_${message.guild.id}`); 
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
    .setColor("#2f3136")
    .setDescription(`<@${sahip}> kullanıcının botu başarıyla reddedildi!`);
  message.channel.send(embed).then(msg => msg.delete(5000));
  const embed3 = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .setDescription(`Botunuz ${sebep} sebebinden reddedildi!`)
  const embed2 = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .setDescription(
    `:red_circle: | ${message.author} adlı yetkili tarafından <@${sahip}> adlı kullanıcının botu \`${sebep}\` sebebinden dolayı reddedldi!`
  );
  client.channels.cache.get(kanal).send(embed2);
  let yetkilikanal = await db.fetch(`hgK2_${message.guild.id}`); 
  if (!yetkilikanal) return;
  const yetkili = new Discord.MessageEmbed()
  .setColor("#2f3136")
  .setTitle("Reddedildi")
  .setDescription(`**Yetkili**\n${message.author}\n**Bot Sahibi**\n<@${sahip}>\n**Sebep**\n${sebep}`)
  client.channels.cache.get(yetkilikanal).send(yetkili);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  PermLevel: 0
};

 //youtube.com/xfixxyyy
//teşekkürler xFixxy

exports.help = {
  name: "reddet",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};