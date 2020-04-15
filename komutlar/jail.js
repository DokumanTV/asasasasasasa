const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("698976729124831293")) return message.channel.send(`Bu komutu kullanabilmek için "\`Jail Hammer ⚒\`" yetkisine sahip olmalısın.`).then(m => m.delete(10000));
  let kullanici = message.mentions.users.first()
  if (!kullanici) return message.channel.send("Lütfen jaile atılacak kullanıcıyı etiketleyniz.");
  let rol = message.mentions.roles.first()
  let uye = message.guild.member(kullanici)
  let sebep = args.slice(1).join(" ")
      if(!sebep) return message.channel.send("Jaile atmak için bir sebep belirtmeniz gerekmektedir.").then(m => m.delete(5000));
          
  message.guild.members.get(uye.id).roles.forEach(r => {
message.guild.members.get(uye.id).removeRole(r) // Jaile atılan kişinin tüm rollerini alır.
 
})
  uye.addRole('699928568557338674') // Jaile atıldığı zaman verilecek rolün ID'sini yazınız.
     const kanal = message.guild.channels.find(c => c.id == "699928628791738428");  
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanici} **ADLI ÜYE JAIL'A SÜRGÜN EDİLDİ!**`) 
  .setImage("https://media.giphy.com/media/j3scStTCt6XRR7mYph/giphy.gif")
  .setFooter(`Komutu kullanan yetkili: ` + message.author.username, message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sürgün"],
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp, belirtilen rolü verir..",
  usage: 'jail @etiket sebep'
}