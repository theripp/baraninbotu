const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Tiger Bot Kurucu")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** **__Tiger BOT Baran KAPLAN Aracılıgı İle Size Ulaştırılıyor.__**\n  \n**•** **__Designed: Baran KAPLAN __**\n \n**•** **@Fortnite Code - baran#8115**')
.addField("» Linkler", `| [WEBSİTE](https://tigerbott.wixsite.com/tigerbot) | [Destek Sunucusu](https://discord.gg/w6zYMUf) |` , false)   .setFooter('Tiger BOT Sahip');

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
  aliases: ['kurucu'],
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'Tüm komutları gösterir.',
  usage: 'kurucu'
};