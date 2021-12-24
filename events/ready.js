const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "-yardım",
        "Youtube / Döküman TV",
        "Öneri Ve Şikayetlerinizi Destek Sunucumuzdan İletebilirsiniz.",
        "Botumuzda Botlist, Kayıt, Moderasyon, Koruma, Eğlence, Radyo Ve Uptime Gibi Gelişmiş Komutlar Mevcuttur.",
        "Aşk iki kişiyle oynanır, iyi olan kaybeder!"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "DökümanTV");
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};