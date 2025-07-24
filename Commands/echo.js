```javascript
module.exports = {
  name: 'echo',
  description: 'Repeats what you say',
  execute: (client, message, args) => {
    if (!args.length) return message.reply('Tafadhali andika kitu nitakachorudia.');
    const text = args.join(' ');
    message.channel.send(text);
  }
};
```
