const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`,)
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//--------------------DESTEK KANAL--------------------\\

client.on('message', async msg => {
let sahip = '726482014877777980'
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.id === '842058161342251089') { 
    if(msg.author.id === sahip) return
    if(msg.author.bot) return
    
    if(msg.guild.channels.cache.get(await db.fetch(`destek_${msg.author.id}`))) {
      msg.delete()
      return msg.guild.channels.cache.get(await db.fetch(`destek_${msg.author.id}`)).send(msg.author + " zaten bir destek talebin bulunmakta!")
    } 
    if(msg.guild.channels.cache.get('842058161342251089')) {// kanalid
      msg.guild.channels.create(`destek-${msg.author.username}`, "text").then(async c => {
        db.set(`destek_${msg.author.id}`, c.id)
      const category = msg.guild.channels.cache.get('833233656755519509') // Kategori id
      c.setParent(category.id)
      let role = msg.guild.roles.cache.get("835523256042782741", "833235738165903381");//Rol id
      let role2 = msg.guild.roles.cache.find("name", "@everyone");
      await c.createOverwrite(role, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });
      await c.createOverwrite(role2, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
      });
      await c.createOverwrite(msg.author, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });

      const embed = new Discord.MessageEmbed()
      .setColor("#f0393b")
      .addField(`» Talep Konusu:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      await c.send({ embed: embed });
      await c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, <@$842059876720574505>`)
      msg.delete()
      db.set(`talep_${c.id}`, msg.content)
      db.set(`kullanici_${c.id}`, msg.author.id)
      }).catch(console.error);
    }
  }
});
  



client.on("message", message => {
if (message.channel.name.startsWith(`destek-`)) {
let kanal = client.channels.cache.get("837393461669658634")
kanal.send(`Mesaj sahibi: ${message.author.username} ( ${message.author.id} ) \n Mesaj İçeriği: ${message.content}`)
}
})



client.on("message", message => {
if (message.content.toLowerCase() === "talep kapat") {
    if (!message.channel.name.startsWith(`destek-`)) return
  
    let yetki = false;
  
    if (message.member.roles.cache.has("842059876720574505")) yetki = true;
    else yetki = false;
  
  if (yetki == false) return message.channel.send("Destek taleplerini yalnızca yetkililer kapatabilir.");
  
    if(message.author.bot) return
    var deneme = new Discord.MessageEmbed()
    .setColor("#f0393b")
    .setAuthor(`Destek Talebi Kapatma İşlemi`)
    .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
    .setFooter(`${client.user.username} | Destek Sistemi`)
    message.channel.send(deneme)
    .then((m) => {
      message.channel.awaitMessages(response => response.content.toLowerCase() === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then(async (collected) => {
          message.channel.delete();
        const embed = new Discord.MessageEmbed()
          .setTitle("")
          .setColor('#f0393b')
          .setDescription("Destek Kapatıldı")
          .addField("Kapatan Kullanıcı:", message.author)
          .addField("Kapatılan Kanal: ", "#" + message.channel.name)
          .addField("Talep Sebebi: ", "```" + await db.fetch(`talep_${message.channel.id}`) + "```")
          .setFooter("BRUH", client.user.avatarURL())
          client.channels.cache.get("837393461669658634").send("Bir __**kullanıcı destek talebi**__ kapatıldı", embed);
          db.delete(`talep_${message.channel.id}`)
        })
        .catch(() => {
          m.edit('Destek Talebi kapatma isteğin zaman aşımına uğradı!').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});


//--------------------ETİKET PREFİX--------------------\\

client.on('message', message => {
if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
 message.reply(`Prefix'im: **f!**, Yardım için: **f!yardım**`)
}
});

//--------------------ETİKET PREFİX--------------------\\

//-------------------ANTİ RAİD-------------------\

client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`antiraidK_${member.guild.id}`)== "anti-raid-aç"
  if (!kanal) return;  
  var cod = member.guild.owner
  if (member.user.bot === true) {
     if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
    let are = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription(`**${member.user.tag}** (${member.id}) Adlı Bota Bir Yetki Verdi Eğer Kaldırmak İstiyorsanız **${prefix}bot-izni kaldır botun_id**.`);
    cod.send(are);
     } else {
       let izinverilmemişbot = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription("**" + member.user.tag +"**" + " (" + member.id+ ") " + "adlı bot sunucuya eklendi ve attım eğer izin vermek istiyorsanız **" + prefix + "bot-izni ver botun_id**")
       member.members.kick();    
       cod.send(izinverilmemişbot)
}
  }
});

//-------------------ANTİ RAİD-------------------\\

//--------------EKLENDİM ATILDIM---------------\\

client.on('guildDelete', guild => {

  let atıldı = new Discord.MessageEmbed()

  .setColor("RANDOM")  
  .setTitle(" Bot Atıldı ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

     client.channels.cache.get('848485163516035082').send(atıldı);

  });

  //Eklendi//

  client.on('guildCreate', guild => {

  let eklendi = new Discord.MessageEmbed()

  .setColor("RANDOM")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

     client.channels.cache.get('848485163516035082').send(eklendi);

  });

//--------------EKLENDİM-ATILDIM------------\\

//----------------OTO ROL---------------------\\

const qdb = require("quick.db")
client.on("guildMemberAdd", member => {
    var rol = qdb.fetch(`otorol_${member.guild.id}`) 
    var rolcük = member.guild.roles.cache.get(rol)
    var kanal = qdb.fetch(`otorolkanali_${member.guild.id}`)
    var kanalcık = member.guild.channels.cache.get(kanal)
    var yazı = qdb.fetch(`otorolyazi_${member.guild.id}`)
    if(!yazı){
      var yazı = "" 
    }
  if (kanalcık == undefined) return
    const embedversion1mq = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Otorol Sistemi`)
    .setDescription(`
    **${yazı}**
    
    **${member} kişisi ${member.guild} sunucusuna katıldı!**
    
    **Verilen rol: ${rolcük}**
    
    **Hoşgeldin ${member}! Seninle Birlikte ${member.guild.memberCount} kişi olduk!**
    `)
kanalcık.send(embedversion1mq)
    member.roles.add(rolcük.id)
})

//--------------------OTOROL--------------------\\

//-------------------SPAM--------------------\\

const dctrat = require('dctr-antispam.js'); 
 
client.on('ready', () => {
   dctrat(client, {
        uyarılimiti: 3, // Uyarı limiti.
        susturmalimiti: 6, // Susturma limiti.
        aralık: 1500, // Mesaj yazma aralığı. ms olarak ayarlayınız
        uyarımesajı: "Spam Yapmaya Devam Edersen Susturulucaksun", // Uyarı mesajı
        susturmamesajı: "Spam Nedeni İle Susturuldun.", // Susturulma mesajı
        maksspam_uyarı: 3,// Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 8'den fazla ileti gönderdiğinde kullanıcılar uyarı alır.
        maksspam_susturma: 4, // Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 10'den fazla ileti gönderdiğinde kullanıcılar susturulur.
        adminrol: ["🏆 | Founder"], // Bu rollere sahip kullanıcılar engellenmez
        adminkullanıcı: ["🇹🇷 𝔍𝔢𝔰么𝔢𝔯 🇹🇷 ツ#1234", "么 boş işler premsesi#2824"], // Bu kullanıcılar engellenmez
        susturmarolü: "MUTE", // Kullanıcı spam yaparsa otomatik olarak susturulur eğer rol açılmaza otomatik olarak açılır.
        susturmasüresi: 900000, // Susturma süresi bir kullanıcı spam yaptığı için susturulursa verilecek ceza süresi (15dk) ms olarak ayarlayınız.
        logkanalı: "antispam-log" // Susturulmaların ve kaldırılmalarının atılacağı log kanalı (açılmazsa otomatik bu isimde açılır.)
      });
  });
 
client.on('message', msg => {
  client.emit('checkMessage', msg); 
})


//--------------------SPAM-----------------\\

//----------------SAYAÇ--------------------\\

client.on("guildMemberAdd", member => {
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(`${member} Sunucuya katıldı! Hedefimize ulaşmamıza ${hedef - member.guild.memberCount} kişi kaldı!`)
if(hedef <= member.guild.memberCount){
  client.channels.cache.get(kanal).send(`Hedefimizi başardık! Sunucumuz ${hedef} kişiye ulaştı!`)
  qdb.delete(`sayackanali_${member.guild.id}`)
  qdb.delete(`sayachedef_${member.guild.id}`)
}
})
client.on("guildMemberRemove", member => {
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(`${member.user.tag} sunucudan ayrıldı! Hedefimize ulaşmamıza ${hedef - member.guild.memberCount} kişi kaldı!`)
})

//----------------SAYAÇ-----------------\\

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);