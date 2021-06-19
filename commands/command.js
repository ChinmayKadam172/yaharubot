module.exports = {
    name:'command',
    description:'Embeds',
    execute(message,args, Discord){
        const newEmbed =  new Discord.MessageEmbed()
        .setColor('#66CDAA')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('This is the embed for rules')
        .addFields(
            {name:'Rule 1', value:'Be nice'},
            {name:'Rule 2', value:'No cursing'},
            {name:'Rule 3', value:'No nsfw'},
        )
        .setImage('https://i.pinimg.com/736x/d3/90/94/d39094fae52080dd9ce44f9d795850db.jpg')
        .setFooter('Make sure to check out our rules');

        message.channel.send(newEmbed);

        }

}
