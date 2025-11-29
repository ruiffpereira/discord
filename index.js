import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.on("ready", () => {
  console.log(`Bot ligado como ${client.user.tag}`);
  client.user.setPresence({
    status: "online",
    activities: [{ name: "Sempre online 👑" }]
  });
});

client.login(process.env.TOKEN);
