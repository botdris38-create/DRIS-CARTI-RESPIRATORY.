
const { getRandomBanat } = require("./banat");

const commands = {
  banat: {
    description: "Magbigay ng random banat",
    execute: () => getRandomBanat()
  },

  help: {
    description: "Ipakita ang available commands",
    execute: () => [
      "!banat - Random banat",
      "!help - Command list",
      "!status - Bot status"
    ].join("\n")
  },

  status: {
    description: "Tingnan ang bot status",
    execute: () => "COSZI BATANG HENERAL is ready! 💜"
  }
};

function handleCommand(message) {
  if (typeof message !== "string") return null;

  const [commandName] = message.trim().split(/\s+/);

  if (!commandName.startsWith("!")) return null;

  const command = commands[commandName.slice(1).toLowerCase()];

  if (!command) return "Unknown command. Type !help";

  return command.execute();
}

module.exports = {
  commands,
  handleCommand
};
  
