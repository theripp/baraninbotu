const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Polis Geliyor!!!!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.giphy.com/media/3osxYk6zeuDPLG1G9O/giphy.gif?cid=e1bb72ff5d29948759526d303604945d&rid=giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ara155',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'ara155'
};
