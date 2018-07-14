const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Could not find user!");
  let bReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permission!")
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!")


  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#660000")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "venturcity-logging");
  if(!banChannel) return message.channel.send("Could not find logging channel!");


  message.delete().catch(O_o=>{});
  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);

  return;
}


module.exports.help = {
  name: "ban"
}
