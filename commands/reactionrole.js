module.exports = {
    name:'reactionrole',
    description:'this is a reaction role command',
    async execute(message,args,Discord,client){
        const channel = '823579600251519027';
        const yellow = message.guild.roles.cache.find(role => role.name === "yellow");
        const blue = message.guild.roles.cache.find(role => role.name === "blue");
        const yellowem = "🍋";
        const blueem = "🍆";
         let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n'
                + 'Uncheck it to remove the tag\n\n'
                + `${yellow} for yellow team\n`
                + `${blue} for blue team`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowem);
        messageEmbed.react(blueem);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellow);
                }
                if (reaction.emoji.name === blueem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow);
                }
                if (reaction.emoji.name === blueem) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
                }
            } else {
                return;
            }
        });
    }

}
