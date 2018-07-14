const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {

      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#18e29f")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt)
      .addField("Prefix", "-<command>");



      return message.channel.send(botembed);
}


module.exports.help = {
  name: "botinfo"
}
