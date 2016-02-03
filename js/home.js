var fs = require('fs');
var path = __dirname + "/json";
var chatsJSON = fs.readFileSync(path + "/chats.json");
var chats = JSON.parse(chatsJSON);
var sidebar = $("#leftSidebar");

function createChatElement(id) {
  var result = $.grep(chats['chats'], function(e) { return e.id === id; })[0];
  sidebar.append(`
    <div class="chat-side-container">
      <img class="chat-side-image" src="img/chat/${result.image}"></img>
      <span class="chat-side-title">${result.title}</span>
    </div>
  `);
}
