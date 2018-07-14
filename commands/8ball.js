const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args, pXpLevel, pInitXP, xpNeeded, gold, pTotalXP) => {



  let i = Math.round(Math.random() * 10);
  if(i === 1)
  {
    message.channel.send("Well, there is a possibility.");
  }
  else if(i === 2)
  {
    message.channel.send("Not likely.");
  }
  else if(i === 3)
  {
    message.channel.send("Absolutely not.");
  }
  else if(i === 4)
  {
    message.channel.send("Nope.");
  }
  else if(i === 5)
  {
    message.channel.send("Only you can know the true answer to that.");
  }
  else if(i === 6)
  {
    message.channel.send("Yes, of course.");
  }
  else if(i === 7)
  {
    message.channel.send("That is beyond my knowledge.");
  }
  else if(i === 8)
  {
    message.channel.send("I don't know, try asking mckuletzz.");
  }
  else if(i === 9)
  {
    message.channel.send("Try asking again.");
  }
  else if(i === 10)
  {
    message.channel.send("No u");
  }
  else if(i === 0)
  {
    message.channel.send("Maybe.");
  }





}

module.exports.help = {
  name: "8ball"
}
