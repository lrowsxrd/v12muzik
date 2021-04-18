module.exports = {
  name: "döngü",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
  
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Döngüye alabileceğim bir şarkı bulamadım.");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`Döngü şimdi **${serverQueue.loop ? "Aktif" : "Deaktif"}**`)
    
    
    
    
  }
}
