const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");
const bd = require("./bd.json");
const Bienvenue_channel = "787990249322184728";

bot.on("ready", async () => {
    console.log("Power");
    bot.user.setStatus("online");
    bot.user.setActivity("Composer de la musique");
});
bot.on("guildMemberAdd", member => {
    bot.channels.cache.get(Bienvenue_channel).send(`Bienvenue à toi sur le serveur ${member} !`);
    member.roles.add("788868643407659008");
});

let prefix = "-"
bot.on("message", async message =>{
    if(message.content === "Glenn Tipton"){
        message.channel.send("A fucking guitar hero")
    }
    if(message.content === prefix + "info"){
        message.channel.send("Je suis un bot, j'ai été créé par luidjy aubel")
    }
    if(message.content === prefix + "Instrument"){
        message.channel.send('La guitare est le meilleur instrument')
    }
    if(message.content === prefix + "Judas Priest"){
        message.channel.send("Judas Priest est un Groupe de Heavy metal composé pour sa formation la plus iconnique de : \n"+"Rob Halford \n"+"Glenn Tipton \n"+"K K Downing \n"+"Ian Hill \n"+"Scott Travis")
    }
    if(message.content === prefix + "SPAM"){
        message.channel.send(`ARRETE DE SPAM FILS DE PUTE DE TES MORT, C'EST UNE HONTE !`)
    }
    if(message.content === prefix + "bagarre"){
        message.channel.send(`La BAGARRE !`)
    }
});
bot.on("message", async message =>{
    if(message.content.startsWith(prefix + "bagarre")){
        const [first, second] = message.mentions.users.keyArray();
        let b = Math.floor(Math.random() * (2 + 1));
        let c = Math.floor(Math.random() * (3));
        if (!first || !second)
         return message.channel.send('Vous devez mentionner 2 utilisateurs différents !');
        message.channel.send(`La BAGARRE ! \n <@${first}> contre <@${second}> ça va faire mal !`);
        console.log("joueur : "+b);
        console.log("attaque : "+c);
        if (b === 2 ){
            message.channel.send(`<@${second}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${first}> !`);
        }
        else {
            message.channel.send(`<@${first}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${second}> !`);
        }
    }
});
bot.on("message", async message =>{
    if(message.content.startsWith(prefix + "MELER")){
        const [first, second, trois, quatre] = message.mentions.users.keyArray();
        let b = Math.floor(Math.random() * (4 + 1));
        let c = Math.floor(Math.random() * (3));
        if (!first || !second || !trois || !quatre)
         return message.channel.send('Vous devez mentionner 4 utilisateurs différents !');
        message.channel.send(`La BAGARRE EN FOLIE ! \n La mélé comprend <@${first}>, <@${second}>, <@${trois}> <@${quatre}> ça va faire mal !`);
        console.log(b);
        if (b === 1 ){
            message.channel.send(`<@${first}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${second}>, <@${trois}> et <@${quatre}> !`);
        }
        else if (b === 2) {
            message.channel.send(`<@${second}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${first}>, <@${trois}> et <@${quatre}> !`);
        }
        else if (b === 3){
            message.channel.send(`<@${trois}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${first}>, <@${second}> et <@${quatre}> !`);
        }
        else{
            message.channel.send(`<@${quatre}> à gagné la bagarre après avoir `+bd.attaque[c]+`<@${first}>, <@${second}> et <@${trois}> !`);
        }
    }
});
bot.on("message", async message =>{
    if(message.content.startsWith(prefix + "kick")){
        let member = message.mentions.members.first();
    if(!member) {
        message.channel.send("Vous devez mentionner un utilisateur !");
    }
if(!member.kickable) {
   message.channel.send("Vous ne pouvez pas kick l'utilisateur !");
} else {
  member.kick();
  message.channel.send("L'utilisateur ["+member.displayName+"] a étais kick !");
}
    }
});
bot.on("message", async message =>{
    if(message.content.startsWith(prefix + "ban")){
        let member = message.mentions.members.first();
    if(!member) {
        message.channel.send("Vous devez mentionner un utilisateur !");
    }
if(!member.bannable) {
   message.channel.send("Vous ne pouvez pas bannir l'utilisateur !");
} else {
  member.kick();
  message.channel.send("L'utilisateur ["+member.displayName+"] a étais banni !");
}
    }
});
bot.on("message", async message =>{
    if(message.content === prefix + "help"){
    const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Les commandes du bot :')
	.setDescription('-help pour afficher ce message \n'+"-info pour afficher les info du bot \n"+"-Instrument pour savoir le meilleur instrument de musique \n"+"-role pour choisir un role \n"+"-Judas Priest pour avoir des info sur les Judas Priest \n"+"-kick pour kick un utilisateur \n"+"-ban pour ban un utilisateur \n"+"-bagarre pour faire une bagarre \n"+"-MELER pour faire une melé")
    message.channel.send(exampleEmbed);
    }
});

       bot.on("message", async message => {
        if(message.content === prefix + "role"){
        //VERIFIED
    if (message.author.bot) return false;
    const Role1 = message.guild.roles.cache.get("788801741511852042");
    const Role2 = message.guild.roles.cache.get("788801064815689769");
    const Role3 = message.guild.roles.cache.get("788801428231159859");
    const Role4 = message.guild.roles.cache.get("788801541380767794");
    const Role5 = message.guild.roles.cache.get("788802061424656424");
    const Role6 = message.guild.roles.cache.get("788801808025387019");
    const Role7 = message.guild.roles.cache.get("788849758365155378");
    const Filter = (reaction, user) => user.id == message.author.id;
    const Embed = new Discord.MessageEmbed()
        .setTitle("Choisie ton role")
        .setDescription("🎹 = piano \n"+"🎸 = instrument à corde\n"+"🎺 = instrument à vent\n"+"🥁 = Percution\n"+"🎧 = MAO\n"+"🎤 = Voix\n"+"🎼 = j'aime tout")
    const reactionMessage = await message.channel.send(Embed);
    await reactionMessage.react("🎹");
    await reactionMessage.react("🎸");
    await reactionMessage.react("🎺");
    await reactionMessage.react("🥁");
    await reactionMessage.react("🎧");
    await reactionMessage.react("🎤");
    await reactionMessage.react("🎼");

    reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
        const reaction = collected.first();
        
        switch (reaction.emoji.name) {
            case "🎹":
                if (message.member.roles.cache.has(Role1.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role1).then(message.channel.send("Role ajouté !"));
                break;
            case "🎸":
                if (message.member.roles.cache.has(Role2.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role2).then(message.channel.send("Role ajouté !"));
                break;
            case "🎺":
                if (message.member.roles.cache.has(Role3.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role3).then(message.channel.send("Role ajouté !"));
                break;
            case "🥁":
                 if (message.member.roles.cache.has(Role4.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role4).then(message.channel.send("Role ajouté !"));
                break;
            case "🎧":
                if (message.member.roles.cache.has(Role5.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role5).then(message.channel.send("Role ajouté !"));
                break;
            case "🎤":
                if (message.member.roles.cache.has(Role6.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role6).then(message.channel.send("Role ajouté !"));
                break;
            case "🎼":
                if (message.member.roles.cache.has(Role7.id)) {return message.channel.send("Vous avez déjà ce role.")};
                message.member.roles.add(Role7).then(message.channel.send("Role ajouté !"));
                break;
        }
    })
}

});
bot.on("message", async message =>{
    if(message.content === "actu"){

    }
});

//bot.login(token.token);
bot.login(process.env.token);