```
commands/ping.js
```
```javascript
module.exports = {
  name: 'ping',
  description: 'Check bot response time',
  execute: async (client, message, args) => {
    const start = Date.now();
    await message.reply('Pinging...');
    const end = Date.now();
    message.reply(`🏓 Pong! Latency is ${end - start}ms`);
  }
};
``
