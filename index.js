import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (msg) => {
  // Ignorar mensagens do próprio bot
  if (msg.author.bot) return;

  // O ID da conta para onde queres enviar
  const targetUserId = "O_TEUID_AQUI";
  const user = await client.users.fetch(targetUserId);

  // Enviar a mensagem para ti
  user.send(
    `📩 **Mensagem recebida no servidor**  
👤 **Autor:** ${msg.author.username}  
#️⃣ **Canal:** ${msg.channel.name}  
💬 **Mensagem:** ${msg.content}`
  );
});

client.login(process.env.TOKEN);
