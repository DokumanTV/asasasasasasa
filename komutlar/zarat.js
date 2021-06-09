const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("0x36393e")
    .setTitle(':game_die: Zarın: ' + narcoscode()));

    function narcoscode() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

 exports.conf = {
  enabled: true,  
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

 exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: ''
};