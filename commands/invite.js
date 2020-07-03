const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["i"],
  description: "link to invite the bot and support server invite.",
  execute(message) {
    let commands = message.client.commands.array();

    let inviteEmbed = new MessageEmbed()
      .setTitle("Invite + Support ")
      .addField("Invite Link", "[Click here to invite the bot ](https://discord.com/api/oauth2/authorize?client_id=693507359225413752&permissions=8&scope=bot)")
      .addField("Support Server", "[Click here to join the support Server](https://discord.gg/59sUb24)")
      .setColor('PURPLE');


    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed);
  }
};