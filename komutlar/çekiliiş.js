const Discord = require('discord.js');
const data = require('quick.db')
const ms = require('ms')

exports.run = async (client, message, args) => {// chimp#0110
  
  function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

    function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
  
  let ödül = []
  let kanal = []
  let zaman = []
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Gerekli yetkiye sahip değilsin.`)
if(!args[0]) return message.channel.send(`Bir argüman girmelisin: !çekiliş başlat/tekrar`)
let arg = ['başlat', 'tekrar']
if(!arg.includes(args[0])) return message.channel.send(`Sadece !çekiliş başlat/tekrar kullanabilirsin.`)
  
if(args[0] === 'başlat') {
try {
  
const filter = m => m.author.id == message.author.id;
     
message.channel.send(`Önce bir ödül yazmalısın.`).then(() => {
  
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
message.channel.send(`Ödül: ${collected.first().content}`).then(() => ödül.push(collected.first().content))
message.delete()

message.channel.send(`Çekiliş hangi kanalda yapılacak?`).then(() => {
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
let as = collected.first().content.replace('<#', '').replace('>', '')
let ch = message.guild.channels.cache.get(as)
if(!ch) return message.channel.send(`Etiketlediğin kanalı bulamadım, işlem iptal edildi.`)
message.delete()
message.channel.send(`Kanal: ${ch}`).then(() => kanal.push(ch.id))
  
message.channel.send(`Çekiliş süresi ne kadar? (1 dakika/1 saat)`).then(() => {
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
let az = collected.first().content;

message.channel.send(`Süre: ${az}`).then(() => zaman.push(collected.first().content)).then(()=> {
  const sure = zaman.slice(0).join(' ')
    const bitecegizamanms = Date.now() + ms(sure.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))

  
    const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${ödül.slice(0).join(' ')}

Başlatan: ${message.author.username}
Zaman: ${sure}

Katılmak için 🎉 tepkisine tıklayın.`)
  .setTitle(`Bir çekiliş başladı!`)
message.guild.channels.cache.get(kanal[0]).send(embed).then(async c => {
message.delete()
data.delete(`çk.${c.id}`)
data.delete(`ödü.${c.id}`)
data.delete(`ma.${c.id}`)
c.react('🎉').then(async reaction => {
const interval = setInterval(async function(){
const kalanzaman = bitecegizamanms - Date.now()   

if (kalanzaman <= 0) {
clearInterval(interval)
const kişiler = reaction.users
await sleep(50)
const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${ödül.slice(0).join(' ')}

Başlatan: ${message.author.username}`)
.setTimestamp(bitecegizamanms)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)

let asd = c.reactions.get(`🎉`).users.random()
message.guild.channels.cache.get(kanal[0]).send(`Tebrikler, ${asd}! Bizden ${ödül[0]} kazandın.
Ödülünü alabilmek için: ${message.author.tag} kişisine ulaş.`)
data.set(`çk.${c.id}`, 'codare')
data.set(`ma.${c.id}`, message.author)
data.set(`ödü.${c.id}`, ödül.slice(0).join(' '))
} else {
const kalanzamanyazi = destructMS(kalanzaman)
embed.setDescription(`**Ödül**: ${ödül.slice(0).join(' ')}

Başlatan: ${message.author.username}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed)
                }
}, 5000)
  
})

})








})
}).catch(collected => { message.channel.send(`Çekiliş süresi girmediğin için iptal edildi.`); });
})
}).catch(collected => { message.channel.send(`Çekiliş kanalı girmediğin için iptal edildi.`); });
})
}).catch(collected => { message.channel.send(`Çekiliş ödülü girmediğin için iptal edildi.`); });
})

  
} catch(err) { return; }    
}
  
if(args[0] === 'tekrar') {
let channel = message.mentions.channels.first()
if(!args[1]) return message.channel.send(`Çekilişin yapıldığı kanalı etiketle.`)
if(!channel) return message