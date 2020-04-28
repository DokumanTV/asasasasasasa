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
  console.log(Date.now() + "LinLord 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
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


//ses

//sağ tık ban
client.on("guildBanAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;
    
      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) ///TÜM ROLLERİNİ ALIR
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("703711039945965600")/// VERİLECEK CEZALI ROL İD
    },3000)
const sChannel = guild.channels.find(c=> c.id ==="703711176886059018")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${yetkili.id}> ${user} adlı Kişiye Sağ tık ban Atıldığı için Banlayan Kişinin Yetkileri Alındı <a:kirmizimsitik:702070532815847474>`)
.setFooter('Developer Gökalp')
sChannel.send(cıks)
guild.owner.send(`EternalGUARD | ** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Banladı Ve Yetkilerini Aldım. <a:kirmizimsitik:702070532815847474>`)
},2000)
})
//sağ tık ban

//rol
client.on("roleDelete", async (role) => { //Garip Rol koruma
  const logs = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first())
  const deleter = await role.guild.members.get(logs.executor.id);
  if(deleter.id == "533650583215800320") return;
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position;
     const sChannel = role.guild.channels.find(c=> c.id ==="703711176886059018")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**Sayın Kurucularımız <@&701811906121564170>** **<@${deleter.id}> ${role.name}** Adlı Kanalı Silindi Ve Ben Kanalı Tekrar Oluşturdum. <a:mavimsitik:701864536743084194>`)
sChannel.send(cıks)
  role.guild.owner.send(` **<@${deleter.id}> ${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum. <a:kirmizimsitik:702070532815847474>`)
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  })
})
//rol

//kanal
client.on("channelDelete", async channel => {
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())
  const deleter = await channel.guild.members.get(logs.executor.id);
  if(deleter.id == "533650583215800320,") return; //bu satıra kendi id'nizi yazın sizin kanal silmenizi engellemeyecektir
  channel.clone(undefined, true, true, "Kanal silme koruması sistemi").then(async klon => {
  channel.guild.owner.send(` **<@${deleter.id}> ${channel.name}** Adlı Kanalı Silindi Ve Ben Kanalı Tekrar Oluşturdum. <a:kirmizimsitik:702070532815847474>`)
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
    const sChannel = channel.guild.channels.find(c=> c.id ==="703711176886059018")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**Sayın Kurucularımız <@&701811906121564170>** **<@${deleter.id}> ${channel.name}** Adlı Kanalı Silindi Ve Ben Kanalı Tekrar Oluşturdum. <a:mavimsitik:701864536743084194>`)
sChannel.send(cıks)
  })
})
//kanal

//bot koruma
client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma')

    if(member.user.bot !==true){

    } 
    else {
    if(!sChannel){
      member.guild.owner.send(`**:zap: Eternal koruma sistemi**
Sunucuya bot cinsinden bir üye geldi bende güvenlik için banladım !
Banlanan Bot: **${member.user.tag}**`)
      .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    } else {
    sChannel.send(`**:zap: Eternal koruma sistemi**
Sunucuya bot cinsinden bir üye geldi bende güvenlik için banladım !
Banlanan Bot: **${member.user.tag}**`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
    }
  }  
  });
//

//ses

client.on('ready', ()=>{
client.channels.get('704609790348755006').join()
})

//ses