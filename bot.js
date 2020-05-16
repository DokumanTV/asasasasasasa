 const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
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
        } catch (e) {
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
        } catch (e) {
            reject(e);
        }
    });
};




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
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
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

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

client.on('message', message => {
  let tag = "仒"; //tagınızı yazın
  let rol = "709432634140262470"; //tag alındığı zaman verilecek rolün ID-si
  let channel = message.guild.channels.find('name', 'oto-tag'); //tagrol-log yerine kendi kanalınızın ismini yaza bilirsiniz
  if (!rol) return;
  if (!tag) return;
  if (message.member.user.username.includes(tag)) {
    if (message.member.roles.has(rol)) return;
    message.member.addRole(rol).then(() => {
      const tagalma = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author} ${tag} tagını aldığından dolayı <@&${rol}> rolü Verildi`)
        .setTimestamp()
      channel.send(tagalma)
    });
  }
  if (!message.member.user.username.includes(tag)) {
    if (!message.member.roles.has(rol)) return;
    message.member.removeRole(rol).then(() => {
      const tagsilme = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author} ${tag} tagını sildiğinden dolayı <@&${rol}> rolü Alındı`)
        .setTimestamp()
      channel.send(tagsilme)
    });
  }
});


//
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Teyitsiz Üye');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.sendMessage("Sunucumuza Hoş Geldiniz Keyifli Vakitler Geçirmenizi Dileriz.")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);
});

//
client.on("guildMemberAdd", member => {  
  const kanal = "709432692290093156";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '<a:false:710937443490332743> **__Bu Hesap Güvenilir Değil__** <a:false:710937443490332743>'
if (kurulus > 1296000000) kontrol = '<a:true:710931365809356861> **__Bu Hesap Güvenilir Gözüküyor__** <a:true:710931365809356861>'
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("**<a:gokalp2:710930970940932188> Hoşgeldin! " + member + " Seninle __\`" + member.guild.memberCount + "\`__ Kişiyiz.**  \n\n <a:bluestar:710931362072363090> **Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin..** \n\n <a:registerco:710931331504406618> <@&709432624753541181> seninle ilgilenicektir. \n\n <a:brave:710930953849274409> Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "\n\n"  + kontrol + " \n\n **<a:blueverify:710930944764411976>** **Tagımızı alarak ` 仒 ` bize destek olabilirsin.** \n",  new Discord.Attachment("https://cdn.discordapp.com/attachments/707284153522978897/708381484201017354/ezgif.com-crop_14.gif"                   
   )
  );
});
//BURAYI @ROLEİD GİBİ EDİTLEYEBİLİRİSİNİZ ! 

//
client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("709432620609699841") ///Cezalı Rol ID'si
   var rol = member.guild.roles.get("709432620609699841") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("709432640801079386") ///Kayıtsız rolü ID'si
   member.addRole(rol)
member.user.send('Hesabınız Bir Hafta Gibi Kısa Bir Sürede Açıldığı İçin Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });
//
client.on("ready", () => {
  client.channels.get("709432702914265128").join();
   //main dosyaya atılacak
})
//

//oto tag

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`technotag_${member.guild.id}`);
  let tagsekil;
  if (tag == null) tagsekil = member.setNickname(`${member.user.username}`)
  else tagsekil = member.setNickname(`${tag} ${member.user.username}`)
});
//////////////ototag
//oto tag