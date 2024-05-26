const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

const token = "6958788722:AAFr0Er9YG7nLZGYFZF8yIfZzTe6-hl7l3k";
const webAppUrl = "https://bubbleit.vercel.app/";

const bot = new TelegramBot(token, { polling: true });

const app = express();

app.use(express.json());
app.use(cors());

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "Жми Играть, чтобы собрать свою вселенную пузырей",
      {
        reply_markup: {
          inline_keyboard: [[{ text: "Играть", web_app: { url: webAppUrl } }]],
        },
      }
    );
  }
});

const PORT = 8000;
app.listen(PORT, () => console.log("Server started on PORT ", PORT));
