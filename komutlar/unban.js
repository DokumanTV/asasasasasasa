const Eris = require('eris');

exports.run = async (client, message, args) => {

function embedCreator(content) {
return client.createMessage(message.channel.id, { embed: { description: content, author: { name: client.user.username, icon_url: client.user.avatarURL } } });
};

if(!args[0]) return embedCreator('Banını açmak istediğin kullanıcının ID numarasını gir..');
if(isNaN(args[0])) return embedCreator('Geçerli bir ID girmelisin.');

if(client.guilds.get(message.guildID).members.get(args[0])) return embedCreator(`**${args[0]}** zaten sunucuda bulunuyor.
Sunucuda olan birinin nasıl banını açabilirim?`);

const bans = await client.getGuildBans(message.guildID);
if(!bans.map(a => a.user.id).some(x => x.includes(args[0]))) return embedCreator(`**${args[0]}** zaten banlı değil.`);

var reason = 'Sebep belirtilmedi.';
if(args[1]) reason = args.slice(1).join(' ');

client.unbanGuildMember(message.guildID, args[0], reason);
const executors = bans.map(a => a).find(x => x.user.id === args[0]).user;
return embedCreator(`**${executors.username}#${executors.discriminator}** isimli kullanıcının banı kaldırıldı.
Geçerli sebep: **${reason}**`);

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unban'
};