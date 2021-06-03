const Discord = require("discord.js")
const db = require('quick.db')
const a = require('../ayarlar.json')
module.exports.run= async(client, message, args) => {
  
if(!args[0]){
  message.reply('Sistemi Açmalı veya Kapamalısın!\n`'+a.prefix+'everyone-here-engel aç` veya `'+a.prefix+'everyone-here-engel kapat`')

}
if(args[0] === "aç"){
message.reply('Everyone Here Engel Sistemi Tüm Sunucuda Açıldı!')
await db.set('engel_'+message.guild.id, "acik")
}
if(args[0] === "kapat"){
message.reply('Everyone Here Engel Sistemi Kapatıldı!')
await db.set('engel_'+message.guild.id, "kapali")
}
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "everyone-here-engel"
}