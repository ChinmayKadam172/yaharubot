module.exports = {
    name:'kick',
    description:'Kick user',
    execute(message,args){
        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('Member has been kicked');
        }
        else{
            message.channel.send('You cant kick that member!');
        }
    }
}
