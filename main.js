const Discord = require('discord.js');

const client = new Discord.Client({ partial: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',  () => {
    console.log('This bot is online');
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Newborn');
    guildMember.roles.add(welcomeRole);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }
    if(command === 'command'){
    client.commands.get('command').execute(message,args, Discord);
    }
    if(command === 'clear'){
    client.commands.get('clear').execute(message,args);
    }
    if(command === 'kick'){
    client.commands.get('kick').execute(message,args);
    }
    if(command === 'ban'){
    client.commands.get('ban').execute(message,args);
    }
    if(command === 'mute'){
    client.commands.get('mute').execute(message,args);
    }
    if(command === 'unmute'){
    client.commands.get('unmute').execute(message,args);
    }
    if(command === 'play'){
    client.commands.get('play').execute(message,args);
    }
    if(command === 'leave'){
    client.commands.get('leave').execute(message,args);
    }
    if(command === 'reactionrole'){
    client.commands.get('reactionrole').execute(message,args,Discord, client);
    }

});

client.login('ODIwNTk4ODc4Mzc4MDAwMzk1.YE3gQg.I7Ay-UlkPcFZPvqkukuui8BHefw');
