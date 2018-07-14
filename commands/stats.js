const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {

let statsEmbed = new Discord.RichEmbed()
.setDescription(`<@${message.author.id}>'s Stats`)
.setColor("#1ff2e0")
.setThumbnail(message.author.displayAvatarURL)
.addField("Level", pXpLevel)
.addField("Total XP", pTotalXP)
.addField("Level Progress", `${pInitXP}/${xpNeeded} XP`)
.addField("Gold", gold);

message.channel.send(statsEmbed);



}


module.exports.help = {
  name: "stats"
}
