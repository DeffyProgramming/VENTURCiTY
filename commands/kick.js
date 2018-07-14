const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {
  //-kick @User reason [...]
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Could not find user!");
  let kReason = args.join(" ").slice(22);

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permission!")
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!")


  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#d86500")
  .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "venturcity-logging");
  if(!kickChannel) return message.channel.send("Could not find logging channel!");


  message.delete().catch(O_o=>{});
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

  return;
}


module.exports.help = {
  name: "kick"
}
