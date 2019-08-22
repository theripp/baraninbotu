const Discord = require('discord.js');



exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** **+ban @kullanıcı** = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** **+kick** = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** **+unban @kullanıcı ** = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** **+rolbilgi** = İstediğiniz Rolün Bilgilerini Gösterir.\n**•** **+temizle** = Herhangi Bir Miktarda Mesajları Siler.\n**•**  **+slowmode** = Sunucuda Yavaş Mod Açar.\n**•** **+kanalıkilitle** = İstediğiniz Kanalı Kilitler\n**•** **+reklamtaraması** = Sunucuda Reklam Varsa Gösterir.\n**•** **+duyuru** = Duyuru Atar.\n ')
  .addField("» Linkler", `| [WEBSİTE](https://tigerbott.wixsite.com/tigerbot) | [Destek Sunucusu](https://discord.gg/w6zYMUf) |` , false) 
      .setFooter('Tiger BOT Yetkili')

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
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};