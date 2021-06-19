module.exports = async (client) =>{
    const guild = client.guilds.cache.get('762611286491529257');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('822471648795688967');
        channel.setName(`Total members: ${memberCount.toLocaleString()}`);
    }, 5000);
}
