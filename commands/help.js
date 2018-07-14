const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {
  message.channel.send(`${message.author}, check your DMs for a list of commands.`);
  message.author.sendMessage("**__User Commands__**\n\n-help: Sends a direct message of all of this bot's commands.\n\n-ping: Bot responds with 'Pong!', can be used to check if the bot is online.\n\n-botinfo: Displays information about the bot.\n\n-serverinfo: Displays information about the server, such as when it was created, how many members are on it, and when you joined that server.\n\n-report: Used to report a user. Full usage: `-report <@User> <Reason>`.\n\n-doggo: Sends a doggo!\n\n-cat: Sends a cat!\n\n-rate: Rates anything out of 10.\n\n-8ball: Replies to any yes/no question.\n\n\n**__Moderation Commands__**\n\n-kick: Kicks a specified user. Full usage: `-kick <@User> <Reason>`.\n\n-ban: Bans a specified user. Full usage: `-ban <@User> <Reason>`.\n\n-tempmute: Temporarily mutes a specified user. Full usage: `-tempmute <@User> <Time[d=days;h=hours;m=minutes;s=seconds]> <Reason>`");





  return;
}

module.exports.help = {
  name: "help"
}
