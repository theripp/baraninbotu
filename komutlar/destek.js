const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** **+canlıdestek** = Yazarak Botun Canlı Desteğine Bağlanabilirsiniz\n \n**•** **+talep** = Yazarak Sunucuda Özel Destek Açarsınız!')
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
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları gösterir.',
  usage: 'destek'
};