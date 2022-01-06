const { Client, Intents } = require('discord.js');
const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS]
  });

let token = 'PUT TOKEN HERE';
let mongoURL = 'PUT MONGODB URL HERE';

client.on('ready', () => {
   console.log(
      `Logged in as ${client.user.tag}!`
   );
});

client.on('messageCreate', async (message) => {
    
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
  
        if(command === 'ping') {
         message.reply('Pong!') 
        } else if(command === 'setprefix') {
          // to do l8rr
        }
})
  
client.login(token);
