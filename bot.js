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

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "★"; //tagınız
    let sunucu = "705048913970856046"; //sunucu ID
    let kanal = "705049276970958918" //log kanal id
    let rol = "705049164001574953"; // rol ID
    if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(kanal).send(`${newUser} ${tag} tagını aldığı Ve Ailemize Katıldı !`)
      client.guilds.get(sunucu).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
      client.channels.get(kanal).send(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    }

  }
})



//
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Gotham People');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.sendMessage("<a:brave:705826445901037669>  Selam Sunucumuza Hoş geldin sunucumuz şuanda sadece taglı üye almaktadır aramıza katılmak için tagımızı almanız yeterli.")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);
});

//
client.on("guildMemberAdd", member => {  
  const kanal = "705854609905811536";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = ' <a:guardreq:705826474816438342>   **__Bu Hesap Güvenilir Değil__** <a:guardreq:705826474816438342>  '
if (kurulus > 1296000000) kontrol = ' <a:guardtik:705826474761912360>    **__Bu Hesap Güvenilir Gözüküyor__** <a:guardtik:705826474761912360>   '
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("** <a:lvlup:705826858578608209>   Hoşgeldin! " + member + " Seninle __\`" + member.guild.memberCount + "\`__ Kişiyiz.**  \n\n <a:hpt2:705826471176044604>    **Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n <a:book1:705826821341446184>   <@&705854552070553622> seninle ilgilenicektir.\n\n <a:elmass:705826841985810865>   Hesabın Oluşturulma Tarihi: " + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "  \n\n"  + kontrol + "   \n\n **<a:mavimsitik:705826857920233518> ** **Tagımızı alarak ` tag yok aq ` bize destek olabilirsin.** \n\n",  new Discord.Attachment("https://ivo3d.files.wordpress.com/2015/01/vezer_speedred.gif"
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
   var rol = member.guild.roles.get("705049166614626490") ///Cezalı Rol ID'si
   var rol = member.guild.roles.get("705049167575253043") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("705049185929396258") ///Kayıtsız rolü ID'si
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

