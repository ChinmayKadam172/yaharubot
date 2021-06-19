module.exports = {
    name:'unmute',
    description:'this is a unmute command',
    execute(message,args){
        const target = message.mentions.users.first();
        if (target) {
            let mainrole = message.guild.roles.cache.find(role => role.name === 'shush');
            let muterole1 = message.guild.roles.cache.find(role => role.name === 'Newborn');
            let muterole2 = message.guild.roles.cache.find(role => role.name === 'Toddler');
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainrole.id);
            memberTarget.roles.add(muterole2.id);
            memberTarget.roles.add(muterole1.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
        }
        else{
            message.channel.send("Can't find that member");
        }
    }
}
