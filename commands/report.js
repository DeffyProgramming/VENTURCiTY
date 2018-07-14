const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Could not find user!");
  let rReason = args.join(" ").slice(22);




  let reportEmbed = new Discord.RichEmbed()
  .setDescription("~Report~")
  .setColor("#18e29f")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Reported in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rReason);

  let reportChannel = message.guild.channels.find(`name`, "venturcity-logging");
  if(!reportChannel) return message.channel.send("Could not find logging channel!");


  message.delete().catch(O_o=>{});
  reportChannel.send(reportEmbed);

  return;
}

module.exports.help = {
  name: "report"
}
