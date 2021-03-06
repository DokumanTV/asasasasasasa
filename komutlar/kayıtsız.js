const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if (!["807630752162250814"].some(role =>
      message.member.roles.cache.get(role)
    ) &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`Komutu kullanmak için yetkiniz bulunmamakta.`)
          .setAuthor(
            message.author.tag,
            message.author.avatarURL({ dynamic: true })
          )
          .setColor("0x36393e")
      )
      .then(x => x.delete({ timeout: 5000 }));
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!member)
    return message.channel
      .send(
        new MessageEmbed()
          .setDescription(`Geçerli Bir Kullanıcı Etiketlemelisin !`)
          .setColor("0x36393e")
      )
      .then(msg => msg.delete({ timeout: 5000 }));
  if (message.member.roles.highest.position <= member.roles.highest.position)
    return;
  if (member.manageable) member.setNickname(member.user.username).catch();
  let digerroller = [];
  member.roles.cache
    .filter(r => r.id)
    .map(r => {
      digerroller.push(r.id);
    });
  member.roles.remove(digerroller);
  await member.roles.add("833241332264337428");
  message.channel
    .send(
      new MessageEmbed().setDescription(
        `${member} Adlı Kullanıcı ${message.author} Tarafından Kayıtsız'a Atıldı !`
      )
    )
    .then(msg => msg.delete({ timeout: 4000 }));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıtsız", "unregister"]
};

exports.help = {
  name: "kayıtsız" 

};