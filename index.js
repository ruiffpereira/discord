import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// O teu ID de utilizador que vai receber alertas
const YOUR_USER_ID = "TEU_ID_AQUI";

client.on("ready", () => {
  console.log(`Bot ligado como ${client.user.tag}`);
  client.user.setPresence({
    status: "online",
    activities: [{ name: "Sempre online 👑" }]
  });
});

// Captura erros do Node.js
process.on("unhandledRejection", async (error) => {
  console.error("Erro detectado:", error);

  try {
    const user = await client.users.fetch(YOUR_USER_ID);
    await user.send(`⚠️ **O bot teve um erro:**\n\`\`\`${error}\`\`\``);
  } catch (err) {
    console.error("Não foi possível enviar a mensagem de erro:", err);
  }
});

process.on("uncaughtException", async (error) => {
  console.error("Exceção não capturada:", error);

  try {
    const user = await client.users.fetch(YOUR_USER_ID);
    await user.send(`⚠️ **O bot teve uma exceção:**\n\`\`\`${error}\`\`\``);
  } catch (err) {
    console.error("Não foi possível enviar a mensagem de exceção:", err);
  }
});

client.login(process.env.TOKEN);
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// O teu ID de utilizador que vai receber alertas
const YOUR_USER_ID = "231920531606208512";

client.on("ready", () => {
  console.log(`Bot ligado como ${client.user.tag}`);
  client.user.setPresence({
    status: "online",
    activities: [{ name: "Sempre online 👑" }]
  });
});

// Captura erros do Node.js
process.on("unhandledRejection", async (error) => {
  console.error("Erro detectado:", error);

  try {
    const user = await client.users.fetch(YOUR_USER_ID);
    await user.send(`⚠️ **O bot teve um erro:**\n\`\`\`${error}\`\`\``);
  } catch (err) {
    console.error("Não foi possível enviar a mensagem de erro:", err);
  }
});

process.on("uncaughtException", async (error) => {
  console.error("Exceção não capturada:", error);

  try {
    const user = await client.users.fetch(YOUR_USER_ID);
    await user.send(`⚠️ **O bot teve uma exceção:**\n\`\`\`${error}\`\`\``);
  } catch (err) {
    console.error("Não foi possível enviar a mensagem de exceção:", err);
  }
});

client.login(process.env.TOKEN);
