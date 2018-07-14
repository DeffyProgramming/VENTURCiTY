const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#e59839")
  .setTitle("Okay, here's a doggo :dog:")
  .setImage(body.url);

  message.channel.send(dogembed);


}


module.exports.help = {
  name: "doggo"
}
