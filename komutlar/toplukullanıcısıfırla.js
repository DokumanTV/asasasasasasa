const Discord = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
exports.run = async(client, message, args) => {
        
       

    
if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("❌ Yetkin yok!")

 const yuzdeHesapla = (p1, p2) => {
   const yapilan = p2 - p1;
      return ((yapilan * 100) / p2).toFixed(2)
    };
  
      const yaklasikSure = (count) => {
          const toplamSure = 3000 * count;
          const tahminiSureIng = prettyMilliseconds(toplamSure);
          const tahminiSureTr = tahminiSureIng
              .replace(/s/g, ' saniye')
              .replace(/m/g, ' dakika')
              .replace(/h/g, ' saat')
              .replace(/ms/g, ' milisaniye');
  
  
          return tahminiSureTr;
      };

const deneme = message.guild.members.cache.map(a => a.nickname)
if (deneme) {
    var members = message.guild.members.cache.array()
    members = members.filter(x => x.nickname !== null && message.guild.me.roles.highest.position > x.roles.highest.position && x.id !== message.guild.owner.id)

    var members2 = message.guild.members.cache.array()
    members2 = members2.filter(x => x.nickname !== null)

    if (members.length == 0) return message.channel.send("Sunucuda takma adı olan kimse yok")
      
 
const onayEmbed = new Discord.MessageEmbed()
                .setFooter(`${message.author.tag} - Onay İşlemi`, message.author.displayAvatarURL())
                .setTimestamp()
                .setColor("#00ccff")
                .addField('Kullanıcı Adı Sıfırlanacak Kişi:', members.length, true)
                .addField('İşlem Süresi:', yaklasikSure(members.length), true)
                .addField('İşlemi Onaylıyor Musun?', `Evet: ✅  Hayır: ❌`)
                .setAuthor(`${message.author.username} Herkesin kullanıcı adını sıfırlamak mı istiyorsun?`, message.author.displayAvatarURL())
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))

                message.channel.send(onayEmbed).then(m => {
                    m.react('✅');
                    m.react('❌');
                    const emojies = ['✅', '❌'];
                    const filter = (reaction, user) => {
                        return emojies.includes(reaction.emoji.name) && message.author.id == user.id;
                    };

                    const collector = m.createReactionCollector(filter, { max: 1, time: 30000 })
                    collector.on('collect', (reaction, user) => {
                        switch (reaction.emoji.name) {
                            case '✅':
                                m.reactions.removeAll();

                                    var islemYapilan = 1, kalanKisi = members.length;
                                    members.forEach(b => {
                                    const timeout = setTimeout(() => {
                                        message.guild.members.cache.get(b.user.id).setNickname("").catch(err => {})
                                        message.guild.members.cache.get(client.user.id).setNickname("").catch(err => {})
                                      m.edit(new Discord.MessageEmbed().setColor("YELLOW").setThumbnail(message.author.displayAvatarURL({dynamic: true})) .setAuthor(`${message.author.username} Herkesin kullanıcı adı sıfırlanıyor...`, message.author.displayAvatarURL()).addField('Kalan Kişi:', kalanKisi, true).addField('Tamamlanacak Yüzde:', `%${yuzdeHesapla(kalanKisi, members.length)}`, true).addField('Toplam Süre:', yaklasikSure(members.length), true).addField(`Kalan Süre:`, `${yaklasikSure(kalanKisi)}`, true).setFooter(`İşlemi Yapan: ${message.author.tag}`, message.author.displayAvatarURL()).setTimestamp())
                                      clearTimeout(timeout)
                                      kalanKisi = kalanKisi - 1;
                                        if (kalanKisi == 0) {
                                            setTimeout(() => {
                                            m.edit(new Discord.MessageEmbed().setColor("#49f30f").setDescription(`Toplamda **${members.length}** üyenin kullanıcı adı  başarıyla sıfırlandı.`))
                                        }, 1000)
                                    }
                                  }, islemYapilan * 1000);
                                  islemYapilan = islemYapilan + 1;
                                })
                                

                                break;
                            case '❌':
                                m.reactions.removeAll();
                                m.edit(new Discord.MessageEmbed().setColor('#ff1100').setDescription(`❌ Ret tepkisine basıldığı için işlem iptal edildi.`));
                                break;
                        };
                    });

                    collector.on('end', collected => {
                        if (collected.size == 0) {
                            m.reactions.removeAll();
                            m.edit(new Discord.MessageEmbed().setColor('#ff1100').setDescription(`❌ 30 saniye içerisinde işlem yapılmadığı için işlem iptal edildi.`));
                        }
                    })
                });
              
            } else {
                message.channel.send(`Takmadı adı olan yok bu yüzden sıfırlamayamıyorum.`)
            }
        }   
        
exports.conf = {
  enabled: true,
  aliases: [ 'kullanıcıadlarısıfırla'],
};

exports.help = {
  name: 'kullanıcıadlarısıfırla',
  description: 'Sunucuda takma adların hepsini temizler',
  usage: 'kullanıcıadlarısıfırla'
};