module.exports = (client) => {
    client.user.setActivity("No Mercy ♥ Suny")
    console.log(`Ready as ${client.user.tag} to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
};