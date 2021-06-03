exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Bu komutu kullanmak için yetkin yok!")
    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!user) return message.reply('Lütfen banlamak için bir kişi etiketleyin!');
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Belirtilmemiş"
    try {
        await user.send(`${message.guild.name} İsimli Sunucudan ${reason} Sebebiyle Yasaklandınız!`); //eğer bu satırı silerseniz banlanan kişiye mesaj göndermez
        await message.guild.members.ban(user, { reason: reason });
    } catch (error) {
        return message.channel.send(`**${user.tag}** Sunucudan Banlanamadı! Hata: ${error}`);
    }

    return message.channel.send(`**${user.tag}** Sunucudan Başarıyla Banlandı!`);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban"],
    permLevel: 0
  };
  
  exports.help = {
    name: "ban",
    description: "Ban command for AntiCode by Bayrak & Wen",
    usage: "!ban @user"
  };