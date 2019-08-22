const Discord = require('discord.js');



exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** **+aşk @kullanıcı** = Kullanıcı İle Aranızdaki Seviyeyi Gösterir.\n**•** **+korkut** = sunucudan birini Korkutursunuz.\n**•** **+1vs1 @kullanıcı** = Kullanıcı İle Eğlenceli 1VS1 atarsınız.\n**•** **+balıktut** = Balık Tutarsınız.\n**•** **+espri** = Espri Yaparsınız (Çok Soğuktur Dikkat).\n**•** +**söv** = Bot İstediğiniz Kişiye Söver.\n**•** **+emojiyazı** = yazdığınız yazıyı emojiye çevirir.\n**•** **+steamstore** = Seçtiğiniz Oyun Hakkında Bilgi Verir.\n**•** **+rastgeleuye** = Rast Gele en az 2 üye seçer.\n**•** **+havadurumu** = Seçtiğiniz Şehirin Hava Durumunu Gösterir. \n**•** **+dansçı** = Dansçı Şekilde Yazı Yazar.\n**•** **+winner** = Özel Resim Atar\n**•** **+afk** = Afk Yapar\n ')
   .addField("» Linkler", `| [WEBSİTE](https://tigerbott.wixsite.com/tigerbot) | [Destek Sunucusu](https://discord.gg/w6zYMUf) |` , false)       .setFooter('Tiger Bot Eğlence')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};