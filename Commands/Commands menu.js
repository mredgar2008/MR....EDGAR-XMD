```javascript
module.exports = {
  name: "menu",
  description: "Onesha orodha ya amri",
  category: "general",
  async run({ sock, msg }) {
    await sock.sendMessage(msg.from, {
      text: `🤖 *MR. EDGAR-XMD BOT MENU*

📌 Commands:
!menu
!owner
!ping
!sticker
!tts
!ai
!groupinfo
!help`,
    });
  },
};
``

