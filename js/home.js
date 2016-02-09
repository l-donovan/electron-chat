var fs = require('fs');
var path = __dirname + "/json";

function generateChatSidebar() {
  var chats = JSON.parse(fs.readFileSync(path + "/chats.json"))['chats'];
  for (i = 0; i < chats.length; i++) {
    result = chats[i];
    $("#chat-side-table").append(`
      <tr class="chat-side-item">
        <td style="width: .1px;"><img class="chat-side-image" src="img/chat/${result.image}"></img></td>
        <td onclick="generateChat(${result.id})"><div class="chat-side-title">${result.title}</div></td>
      </tr>
    `);
  }
}

function generateChat(id) {
  var chatMeta = JSON.parse(fs.readFileSync(path + "/chatData/chat_" + id + ".json"))['chatMeta'];
  var chatHistory = JSON.parse(fs.readFileSync(path + "/chatData/chat_" + id + ".json"))['chatHistory'];

  if($.trim($("#mainPane").html())) $("#mainPane").empty();
  $("#mainPane").append(`
    <div id="chat-active-header">
      <span id="chat-active-header-text" title="Chat ID: ${chatMeta.id}">${chatMeta.title}</span>
    </div>
    <div id="chat-active-content">
      TODO
    </div>
  `)
}
