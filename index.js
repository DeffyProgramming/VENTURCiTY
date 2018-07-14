const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client({disableEveryone: true});
const Enmap = require("enmap");
const talkedRecently = new Set();
bot.commands = new Discord.Collection();

const totalXP = new Enmap();
const xpLevel = new Enmap();
const initXP = new Enmap();
const gold = new Enmap();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0)
  {
    console.log("Couldn't find any commands!")
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props)
  });
});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity(`${bot.guilds.size} servers | -help`, {type: "WATCHING"})

  //bot.user.setGame("kek");
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined ${member.guild}.`);
  let welcomechannel = member.guild.channels.find(`name`, "welcome-leave");
  welcomechannel.send(`[+] **Welcome ${member} to the server!** [#${member.guild.memberCount}] :white_check_mark:`);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} left ${member.guild}.`);
  let welcomechannel = member.guild.channels.find(`name`, "welcome-leave");
  welcomechannel.send(`[-] **Sadly, ${member} has left the server.** :x:`);
});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} has been created in ${channel.guild}`);
  let createChannelLog = channel.guild.channels.find(`name`, "venturcity-logging");

  let channelCreateEmbed = new Discord.RichEmbed()
  .setTitle("~Channel Created~")
  .setColor("#2fbaed")
  .addField("Time Created", channel.createdAt)
  .addField("Channel Name", channel.name);

  createChannelLog.send(channelCreateEmbed);
});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} has been deleted in ${channel.guild}`);
  let deleteChannelLog = channel.guild.channels.find(`name`, "venturcity-logging");

  let channelDeleteEmbed = new Discord.RichEmbed()
  .setTitle("~Channel Deleted~")
  .setColor("#9e0000")
  .addField("Channel Name", channel);

  deleteChannelLog.send(channelDeleteEmbed);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let pXpLevel = xpLevel.get(`${message.author}`);
  let pTotalXP = totalXP.get(`${message.author}`);
  let pInitXP = initXP.get(`${message.author}`);
  let pGold = gold.get(`${message.author}`);
  let xpNeeded = Math.round((0.7 * (pXpLevel * pXpLevel)) + (12 * pXpLevel) + 50);
  let cooldown = 30;

  if(talkedRecently.has(message.author.id)) {

  }
  else {



    if(totalXP.get(`${message.author}`) === null) {
      totalXP.set(`${message.author}`, 0);
      initXP.set(`${message.author}`, 0);
      xpLevel.set(`${message.author}`, 0);
      gold.set(`${message.author}`, 0);
      let xpInc = Math.round((Math.random() * 10) + 15);
      totalXP.set(`${message.author}`, totalXP.get(`${message.author}`) + xpInc);
      initXP.set(`${message.author}`, initXP.get(`${message.author}`) + xpInc);
      gold.set(`${message.author}`, gold.get(`${message.author}`) + pXpLevel);
      if(initXP.get(`${message.author}`) >= xpNeeded) {
        message.channel.send(`Congrats, <@${message.author.id}>! You have leveled up to level ${pXpLevel + 1}!`);
        xpLevel.set(`${message.author}`, pXpLevel + 1);
        initXP.set(`${message.author}`, initXP.get(`${message.author}`) - xpNeeded);
      }
    }
    else {
      let xpInc = Math.round((Math.random() * 10) + 15);
      totalXP.set(`${message.author}`, totalXP.get(`${message.author}`) + xpInc);
      initXP.set(`${message.author}`, initXP.get(`${message.author}`) + xpInc);
      gold.set(`${message.author}`, gold.get(`${message.author}`) + pXpLevel);
      if(initXP.get(`${message.author}`) >= xpNeeded) {
        message.channel.send(`Congrats, <@${message.author.id}>! You have leveled up to level ${pXpLevel + 1}!`);
        xpLevel.set(`${message.author}`, pXpLevel + 1);
        initXP.set(`${message.author}`, initXP.get(`${message.author}`) - xpNeeded);
      }
    }

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);

    }, 30000);
  }











  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args, pXpLevel, pInitXP, xpNeeded, pGold, pTotalXP);




});

bot.login(process.env.BOT_TOKEN);
