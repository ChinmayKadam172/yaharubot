const ms = require('ms')
module.exports = {
    name:'ban',
    description:'Ban user',
    execute(message,args){
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Member has been banned!');
        }
        else{
            message.channel.send('You cant ban that member!');
        }
    }
}
