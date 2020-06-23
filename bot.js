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
//
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Unregistered');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.sendMessage("Sunucumuza Hoş Geldiniz Keyifli Vakitler Geçirmenizi Dileriz. Taglı Alımdayız Dilerseniz Tagımızı Alabilirsiniz. ✮")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
  member.addRole(joinRole);
});

//
client.on("guildMemberAdd", member => {
var rol = member.guild.roles.get("714212670609555548")
member.addRole(rol)
   })

//
client.on("guildMemberAdd", member => {  
  const kanal = "724713040951509002";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '<a:false:714215310575796224> **__Bu Hesap Güvenilir Değil__** <a:false:714215310575796224>'
if (kurulus > 1296000000) kontrol = '<a:true:714215052831359017> **__Bu Hesap Güvenilir Gözüküyor__** <a:true:714215052831359017>'
  moment.locale("tr");
  let buse = client.channels.get(kanal);
buse.send("**<a:greenload:714215272466088068> Hoşgeldin! " + member + " Seninle __\`" + member.guild.memberCount + "\`__ Kişiyiz.**  \n\n <a:brave:714215587395534939> **Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin..** \n\n <a:registerbook:714215012884807756> <@&714212657716133948> seninle ilgilenicektir. \n\n <a:bluestar:714215046699548734> Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd (hh:mm:ss)__**") +  "\n\n"  + kontrol + " \n\n **<a:gokalp:714215291793440789>** **Tagımızı alarak ` 仒 ` bize destek olabilirsin.** \n",  new Discord.Attachment("https://cdn.discordapp.com/attachments/707284153522978897/714224741732319236/ezgif.com-crop_14.gif"                   
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
   var rol = member.guild.roles.get("714212654071283853") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("714212670609555548") ///Kayıtsız rolü ID'si
   member.addRole(rol)
member.user.send('Hesabınız Bir Hafta Gibi Kısa Bir Sürede Açıldığı İçin Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });


//oto tag

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`technotag_${member.guild.id}`);
  let tagsekil;
  if (tag == null) tagsekil = member.setNickname(`${member.user.username}`)
  else tagsekil = member.setNickname(`${tag} ${member.user.username}`)
});
//////////////ototag
//oto tag

// İltifatlar
const iltifatlar = [
  'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
  'Gerçek Sevgiye Layıksın.',
  'Çok Tatlısın',
  'Sensiz Geçen Dakikaların Asırlardan Farkı Yok.',
  'Görmediğim Zaman Korktuğum Kişi Tahmin Et Kim ? Tabi ki Sensin Böyle Bir Tatlılığı Nasıl Kaybedebilirim Diye Korkuyorum.',
  'Karanlık Sende Korkuyor Neden Biliyor Musun ? Çünkü Karanlık Işıktan Korkak.',
  'B U      K A D A R      T A T L I      O L M A Z      M I S I N ?',
  'Daralıyorum Senin Gibi Mükemmel Bir İnsanla Kıyaslayamıyorum Kendimi...',
];
// İLTİFATLARI BU ŞEKİLDE İSTEDİĞİNİZ KADAR ÇOĞALTABİLİRSİNİZ
client.on("message", async message => {
  if(message.channel.id !== "709432720874406049") return;
  let codeAcademy = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(codeAcademy >= 25) { // 50 yazan yer, 50 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[random]}**`);
  };
});

//
client.on('guildMemberAdd', async (member, guild, message) => {
 
let role = db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = db.fetch(`autoRole_${member.guild.id}`)
 let i = db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
 
 
  if (!i) return
if (!role) {
  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription("@" + member.user.tag + " **Kullanıcısına** <@&" + otorol + "> **Verildi.**")
                        .setColor('0x36393E')
                        .setFooter(`P O S E I D O N 🔱`)
     member.guild.channels.get(i).send(embed)
} else if (role) {
    member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`\`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Verildi.**`)
                        .setColor('0x36393E')
                        .setFooter(`P O S E I D O N 🔱`)
     member.guild.channels.get(i).send(embed)
 
}
 
 } catch (e) {
 console.log(e)
}
}
 
});
 
 