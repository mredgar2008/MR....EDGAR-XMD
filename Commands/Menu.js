```javascript
module.exports = {
  name: 'menu',
  description: 'Display available commands',
  execute: async (client, message, args) => {
    const menu = `
🔹 *BOT MENU* 🔹

📌 !ping - Check bot speed  
📌 !help - Get support info  
📌 !about - Info about bot  

_© MR....EDGAR-XMD_
    `;
    await message.reply(menu);
  }
};
```
