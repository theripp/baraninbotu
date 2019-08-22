const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription(':white_small_square: | **+kullanıcıbilgim**: Kullanıcı Bilgini Gösterir!\n:white_small_square: | **+avatar** = Profil Resmini Atar!\n :white_small_square: | **+talep** = Özel Talep Açar!\n')
.addField("» Linkler", `| [WEBSİTE](https://tigerbott.wixsite.com/tigerbot) | [Destek Sunucusu](https://discord.gg/w6zYMUf) |` , false)   .setFooter('Tiger BOT Destek');

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
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı'
};