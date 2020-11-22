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
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
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
// Sunucuya Girene Rol Verme

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', '772074648929566721');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.sendMessage("Sunucumuza Hoş Geldiniz Keyifli Vakitler Geçirmenizi Dileriz. İsim Yaş Yazmayı Unutma.Tagımızı Alarak Destek Olabilirsin Tagımız **👿 |**")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);
});


// Sunucuya Girene Rol Verme

// isim yaş 
client.on("guildMemberAdd", member => {  
  member.setNickname('İsim | Yaş');
  });
//isim yaş


// Hoş Geldin Mesajı

client.on("guildMemberAdd", member => {  
  const kanal = "772075615989923850";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '<:hg:779609306004979742> **__Bu Hesap Güvenilir Değil__** ⛔'
if (kurulus > 1296000000) kontrol = '<:Hmm:779609306030538782> **__Bu Hesap Güvenilir Gözüküyor__** :tik:'
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("**<:sa:779605015849074728> Hoşgeldin!** " + member + " **Seninle \`" + member.guild.memberCount + "\` Kişiyiz.**  \n <:kral:779609005495943178> **Müsait olduğunda <@&772075615989923850> Odasına Geçip İsim Yaş Yazarak Kaydını Yaptırabilirsin.** \n <:gentleblob:779942606838562836> <@&772077197993050153> seninle ilgilenicektir. \n <:WumpusHello:779942907985526814> Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "\n"  + kontrol + " \n **<:HadeEyw:779609309260546079> ** **Tagımızı alarak ` 👿 ` bize destek olabilirsin.** \n",  new Discord.Attachment("https://media.giphy.com/media/lMCSqqyodOZX809HFE/giphy.gif")
  );
});

// Hoş Geldin Mesajı



// Şüpheli Hesap

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("779951740300558357") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("772074648929566721") ///Kayıtsız rolü ID'si
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



client.on("userUpdate", async (eski, yeni) => {
  var sunucu = client.guilds.get('772070366122213414'); // Buraya Sunucu ID
  var uye = sunucu.members.get(yeni.id);
  var normalTag = "👿"; // Buraya Normal Tag (Yoksa boş bırakın)
  var ekipTag = "👿"; // Sunucunun Tagı
  var ekipRolü = "779952162787819531"; // Tagın Rol IDsi
  var logKanali = "772073067618762763"; // Loglanacağı Kanalın ID

  if (!sunucu.members.has(yeni.id) || yeni.bot || eski.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.has(ekipRolü)) {
    try {
      await uye.addRole(ekipRolü);
      await uye.setNickname((uye.displayName).replace(normalTag, ekipTag));
      await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
      await client.channels.get(logKanali).send(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`);
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.has(ekipRolü)) {
    try {
      await uye.removeRoles(uye.roles.filter(rol => rol.position >= sunucu.roles.get(ekipRolü).position));
      await uye.setNickname((uye.displayName).replace(ekipTag, normalTag));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${ekipTag}**`);
      await client.channels.get(logKanali).send(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`);
    } catch(err) { console.error(err) };
  };
});



// Botu Sese Koyma

client.on("ready", () => {
  client.channels.get("772073093543886890").join();
   //main dosyaya atılacak
})

// Botu Sese Koyma

