const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message, client) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`Clarity Music Commands`)
      .setDescription("List of all commands")
      .setColor('PURPLE');

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed);
  }
};