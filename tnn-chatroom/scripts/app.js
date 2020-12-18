// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// check username in local storage
const username = localStorage.username ? localStorage.username : 'anonymous';
const room = localStorage.room ? localStorage.room : 'general';

// class instances
const chatRoom = new ChatRoom(room, username);
const chatUI = new ChatUI(chatList);

// get chats and render
chatRoom.getChats(data => chatUI.render(data));

// new message to database
newChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = newNameForm.name.value.trim();
  chatRoom.updateName(username);
  newNameForm.reset();
  updateMsg.innerText = `username updated to ${username}`;
  setTimeout(() => updateMsg.innerText = '', 3000);
});

// update room
rooms.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatRoom.updateRoom(e.target.id);
    chatRoom.getChats(data => chatUI.render(data));
    updateButtons(e.target.id);
  }
});

// update room buttons
const updateButtons = currentRoom => {
  rooms.querySelectorAll('.btn')
    .forEach(b => {
      if (b.id === currentRoom) {
        b.classList.add('btn-active');
      } else {
        b.classList.remove('btn-active');
      }
    });
};

updateButtons(room);
