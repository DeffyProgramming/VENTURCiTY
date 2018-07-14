const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {



  let i = null;
  let e = Math.round(Math.random() * 100);
  if(e == 1)
  {
    i = 11;
  }
  else if(e == 2)
  {
    i == -1;
  }
  else {
    i = Math.round(Math.random() * 10);
  }




  message.channel.send(`${i}/10.`);



}

module.exports.help = {
  name: "rate"
}
