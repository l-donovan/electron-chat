var fs = require('fs');
var path = __dirname + "/json";
var chats = JSON.parse(fs.readFileSync(path + "/chats.json"));
var sidebar = $("#chatTable");

function loadChat(chatId) {
  console.log("Opened chat" + chatId);
}

function createChatElement(id) {
  var result = $.grep(chats['chats'], function(e) { return e.id === id; })[0];
  sidebar.append(`
    <tr class="chat-side-item">
      <td style="width: .1px;"><img class="chat-side-image" src="img/chat/${result.image}"></img></td>
      <td onclick="loadChat(${result.id})"><div class="chat-side-title">${result.title}</div></td>
    </tr>
  `);
}
