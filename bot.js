const Discord = require('discord.js');
const discord = require('discord.js');
const http = require("http");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const express = require("express");
const fetch = require('node-fetch');
const app = express();
const fs = require('fs');
const ms = require('ms');
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

//-------------------NAPİM ENGEL VS------------------\\
client.on("message", async msg => {
  if (msg.author.bot) return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "https://",
      "http://",
      "discord.gg",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          return msg.channel
            .send(`${msg.author.tag}, Reklam Yapmak Yasak!`)
            .then(msg => msg.delete(10000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoş Geldin");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});



//////////////////////////////////////////////////

client.login(process.env.token);

client.on('message', msg => {
  
  var cevap = [
    
    "Aleyküm Selam Kardeşim",
    "Ve aleyküm selam ve rahmetullahi ve berekatü",
    "<:argenova_as:836289440107462758>"
];

var cevaplar = cevap[Math.floor(Math.random() * cevap.length)];



  let deneme1 = msg.content.toLowerCase()
  if (deneme1 === 'sa' || deneme1 === 'Sa' || deneme1 === 'sea' ) {
  msg.channel.send(`${cevaplar}`)
  
     }
  })

//--------------------------------KOMUTLAR-------------------------------\\

/////////küfür engel
client.on("message", async msg => {
  
  
  let a = await db.fetch(`kufur_${msg.guild.id}`)
    if (a == 'acik') {
      const küfür = [
        "yarak","mk", "amk", "aq", "orospu", "Oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git","ebenin","sikerim","sik","sikiyim","Amk","Mq","SİKTİR","OROSPU","SİKİK","YARRAM","YARRAK","PİÇ","SİK","SİKERİM","AMK","AM","SG","MQ","MAL","Amq","siq","s2iş","s2ik","Phiç","phiç","Piç","fuck"
                  ]
            if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();
                          
                    return msg.channel.send(`<:argenova_katilcivciv:854298085924667422> **Sakin Ol Kardişim !!!**`).then(msg => msg.delete({ timeout: 5000}));
            }          
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!a) return;
          })

/////////napim engel
client.on("message", async msg => {
  
  
  let a = await db.fetch(`napim_${msg.guild.id}`)
    if (a == 'acik') {
      const napim = [
        "napim","Napim", "NAPİM", "nApim", "nAPİM", "napım", "napiyim", "napam", "Napam", "npm", "n a p i m", "npim", "Napım", "napiim", "Napiim"
                  ]
            if (napim.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();
                          
                    return msg.channel.send(`<:argenova_katilcivciv:854298085924667422> **Napim Demek Bu Sunucuda Yasak Ağla !!!**`).then(msg => msg.delete({ timeout: 5000}));
            }          
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!a) return;
          })

///reklamengel

client.on("message", async message => {
  
  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
          message.delete();
          
          return message.reply('<:argenova_katilcivciv:854298085924667422> **Hey Dur! Bu Sunucuda Reklamı Engelliyorumda ehheh**').then(message => message.delete(6000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async message => {
  
  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
          message.delete();
          
          return message.reply('<:argenova_katilcivciv:854298085924667422> **Hey Dur! Bu Sunucuda Reklamı Engelliyorumda eheh**').then(message => message.delete(6000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});

//--------------------------------------------\\

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

//AFK

client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Afk'lıktan Çıktınız`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});

//AFK

//-----------------BAN LİMİT---------------------\\

client.on("guildBanAdd", async (guild, user) => {
  if (!db.has(`banlimit_${guild.id}`)) return;
  let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
  if (logs.entries.first().executor.bot) return;
  const kisi = logs.entries.first().executor
  const member = guild.members.get(kisi.id)
  if (member.hasPermission('ADMINISTRATOR')) return;
  let banlimit = db.fetch(`banlimit_${guild.id}`)
  if (isNaN(banlimit)) return;
  banlimit = banlimit + 5
  if (!db.has(`bansayi_${member.id}_${guild.id}`)) {
    if (banlimit == 5) {
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }else{
      db.set(`bansayi_${member.id}_${guild.id}`, 5)
    }
  }else{
    const bansayisi = db.fetch(`bansayi_${member.id}_${guild.id}`)
    if (bansayisi >= banlimit) {
      db.delete(`bansayi_${member.id}_${guild.id}`)
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }
  }
})

//BANLİMİT

//-----------UPTİME----------\\

setInterval(() => {
const Linkler = db.get('Linkler')
if(!Linkler) return;
const De = Linkler.map(Revenge => Revenge.url)
De.forEach(Link => {
try {
fetch(Link)
} catch(e) {
console.error(e)
}
})
console.log(`${client.user.username} | ${db.get('Proje') || 1} Proje Hostandı`)
}, 60000)

client.on('ready', () => {
console.log(`${client.user.username} Aktif!`)
if(!Array.isArray(db.get('Linkler'))) {
db.set('Linkler', [])
}
})
client.on('message', async message => {
  if(message.author.bot) return;
  var Split = message.content.split(' ')

  if(Split[0] == prefix+'uptime-ekle') {
  var Link = Split[1]
  fetch(Link).then(() => {
    const Revenge = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setDescription(`
    
   ❎ **Proje Sistemimizde Zaten Bulunuyor ** 

    `)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL)
    if(db.get('Linkler').map(Revenge => Revenge.url).includes(Link)) return message.channel.send(Revenge)
    const success = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`
    
    **✅ Yazdığınız Proje Başarıyla Uptime Sistemimize Eklendi.**
    `)
    .addField('```-linkler```','Komutunu Kullanarak Ekledigin Linkleri Görebilirsin!')
    .setTimestamp()
    message.channel.send(success)
    db.push('Linkler', { url: Link, owner: message.author.id, owner2: message.author.tag})
    db.add(`Sahiplik_${message.author.id}`,1)
    db.push(`Projesi_${message.author.id}`,Link)
    db.add(`Proje`,1)
  }).catch(Hata => {
  const dijitaluptime = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setDescription(`

  **❎ Hey Uptime Edeceğim URL Girmelisin! **

> -ekle (Glitch Show Linki)
  `)
.setImage("https://media.discordapp.net/attachments/833584110483013642/906501816013959218/unknown.png?width=177&height=247")
  .setThumbnail(message.author.avatarURL)
  message.channel.send(dijitaluptime)
  })
  }
  if(Split[0] == prefix+'uptime-say') {
  const say = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setThumbnail(message.author.avatarURL)
  .setDescription(`
  
☀️ ** Şuanda  \`${db.get('Proje')}\` URL'yi 7/24 Aktif Tutuyor. **

☀️ **  Bu Linklerden Sadece \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` Tane Senin URl'ni Uptime ediyor!**
`)
  message.channel.send(say)
  }

  if(Split[0] == prefix+'uptime') {
  const pxd = new Discord.MessageEmbed()
  .setColor('#2f3136')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  
  .setDescription(`
** Pluto+ Uptime **
- **-uptime-ekle (Glitch Show Linki)** = Botunuzu 7/24 Aktif Tutar.
- **-uptime-linkler** = 7/24 Tuttuğum linklerini gösterir.
- **-uptime-say** = Tüm Uptime edilmiş bot sayısını gösterir.`)
  .addField('------------------------------------------------------',`
[Destek Sunucu](https://discord.gg/Jycf7FEZAa)
[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=1099511627775)`)
  .setImage('https://cdn.discordapp.com/attachments/910121358669783040/910121456741007400/standard.gif')
  message.channel.send(pxd)
  }

    if(Split[0] == prefix+'uptime-linkler') {
    const Linkleri = db.fetch(`Projesi_${message.author.id}`)
    if (!db.get('Linkler').map(Revenge => Revenge.owner).includes(message.author.id)) return message.channel.send(new Discord.MessageEmbed().setColor('#2f3136').setDescription(`\<:argenova_katilcivciv:854298085924667422> **Hiç link eklememişsin. Üzdün Beni Dostum Link Eklemek İçin \`${prefix}ekle\` yazman yeterli**`))
    message.channel.send(new Discord.MessageEmbed().setColor('#2f3136').setDescription(`- **7/24 Aktfi Tuttuğum botlarınızın linklerini daha güvenli olduğunda DM üzerinden gönderdim ${message.author}**`).setThumbnail(message.author.avatarURL))
    message.author.send(new Discord.MessageEmbed().setColor('#2f3136').setDescription(`- ** Uptime Ettigin Linklerin:** \n\n\``+Linkleri.join('\n')+`\`

 [Destek Sunucu](https://discord.gg/Jycf7FEZAa)`).setThumbnail(message.author.avatarURL))
    }

})

client.on("message", async message => {

  if(!message.content.startsWith("eval")) return;
  if(!["509417115439071233"].includes(message.author.id)) return;
  var args = message.content.split("eval")[1]
  if(!args) return message.channel.send(":x: ..")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })

const Log = message => {
console.log(`${message}`)
}

client.on('message', message => {
  const codemarefireklamliste = ['.glitch.me/','.glitch.me']
  if(codemarefireklamliste.some(codemarefi => message.content.includes(codemarefi))){
   
    message.delete()
  }
})

//---------EKLENİNCE SAHİBE DM--------\\

client.on("guildCreate", guild => {

  let murphy = guild.owner
  
const dcs = new Discord.MessageEmbed()
.setTitle(`Merhaba!`)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor("GREEN")
.addField('Prefixim', ayarlar.prefix)
.addField(`Destek Sunucusu`, `https://discord.gg/Jycf7FEZAa`)
murphy.send(dcs)
});

//---------EKLENİNCE SAHİBE DM--------\\

//--------------------ETİKET PREFİX--------------------\\

client.on('message', message => {
if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
 message.reply(`Prefix'im: **-**, Yardım için: **-yardım**`)
}
});

//--------------------ETİKET PREFİX--------------------\\

//----EKLENİNCE KANAL ACIP MESAJ GONDERME----\\

client.on('guildCreate', guild => {
    const embed = new Discord.MessageEmbed()
        .setTitle('BAŞLIK') // başlık
        .setColor('RANDOM') // renk
        .setDescription('AÇIKLAMA') // açıklama
        .setFooter('ALT KISIMA GELECEK YAZI') // alt kısım
        .setImage('RESİM LİNKİ')// resim

    if (guild.me.hasPermission('MANAGE_CHANNELS')) {
        guild.channels.create(client.user.username, {
            type: 'text',
            topic: '**__Beni Ekldeiğinz İçin Teşekkür Ederim__**! ❤ \n Tüm Komutlara Erişmek İçin -yardım Yazabilirsiniz! ❤ \n Bota Oy Vermek İçin https://top.gg/bot/847022035510886430/vote Oy Verirseniz Mutlu Oluruz! ❤ \n Botun Destek Sunucusu https://discord.gg/Jycf7FEZAa Herhangi Bir Sıkıntı Olursa Buradan Destek Alabilirsiniz! ❤',
            permissionOverwrites: [{ id: guild.id, deny: ['VIEW_CHANNEL'] }]
        }).then(c => {
            c.send(`**Beni eklediğiniz için teşekkür ederim ❤**`, embed)
            setTimeout(() => {
                c.send('@everyone').then(m => m.delete({ timeout: 500 }))
            }, 3000)
        });
    };
});

//----EKLENİNCE KANAL ACIP MESAJ GONDERME----\\

//------------RESİMLİ SEVİYE SİSTEMİ-------------\\

client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);
            message.channel.send(`:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`);
        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});

//------------RESİMLİ SEVİYE SİSTEMİ-------------\\

//-------------------ANTİ RAİD-------------------\\

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

//---------------REKLAM İSİM BAN---------------\\

  // İsim Reklam Koruma
  client.on('guildMemberAdd', youthanasia => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.user.username.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

  client.on('guildMemberUpdate', (rifleman, youthanasia) => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.displayName.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

//---------------REKLAM İSİM BAN---------------\\

//MUTE


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
require('discord-buttons')(client);