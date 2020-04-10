const Discord = require('discord.js')
const db = require('quick.db')

exports.runs = async (client, message, args) => {
  
   let user = message.author
   let sebep = args.join(" ")
   
   
   if (!sebep) return message.channel.send(`Bir sebep yazmalısın dostum.`)
  
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`Artık\`{sebep}\` Sebebiyle AFK'sın.`)
};

 exports.conf = {
  enabled: true,
   guildOnly: true,
   aliases: [],
   permLevel: 0
 }

 exports.help = {
   name: 'afk',
   description: "AFK OLMANIZI SAĞLAR.",
   usage: 'afk [sebep]'
   
}