const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {

  let {body} = await superagent
  .get(`https://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ceccca")
  .setTitle("Okay, here's a cat :cat:")
  .setImage(body.file);

  message.channel.send(catembed);


}


module.exports.help = {
  name: "cat"
}
