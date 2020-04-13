const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let guild = message.guild
 if (!message.guild) {
  const dmuyari = new Discord.RichEmbed()
  .setDescription(`Bu komut özel mesajlarda kullanıma kapatılmıştır. Sunucularda tekrar dene.`)
  return message.author.send(dmuyari); }
if (message.author.bot === true) {
  return;
}
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Bu komutu kullanabilmek için "\`Rolleri Yönet\`" yetkisine sahip olmalısın.`);


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Bu Komutu Kullanmak İçin : ,sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bu Komutu Kullanmak İçin : ,sustur <Kullanıcı> <Süre> Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> için konuşma izinleri kapatıldı! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> adlı kişinin susturulma süresi dolduğu için susturulması kaldırıldı!`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'gsustur', 'mute']
};

exports.help = {
  name: 'sustur',
  description: 'Belirttiğiniz kullanıcıyı süreli susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
  
}
