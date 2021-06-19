module.exports = {
    name:'clear',
    description:'Clear message',
    async execute(message,args){
        if(!args[0]) return message.reply('Please enter the amount of messages that you want to clear!');
        if(isNaN(args[0])) return message.reply('Please enter a real number!');

        if(args[0] > 100) return message.reply('Max limit is 100!');
        if(args[0] < 1) return message.reply('Min limit is one,duh!');

    await message.channel.messages.fetch({Limit: args[0]}).then(messages => {
        message.channel.bulkDelete(args[0]);
    });
}}
