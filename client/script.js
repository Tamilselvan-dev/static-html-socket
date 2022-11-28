const joinRoomButton = document.getElementById('room-button');
const messageInput = document.getElementById('message-input');
const roomInput = document.getElementById('room-input');
const form = document.getElementById('form');
import { io } from 'socket.io-client';

const socket = io(
  'https://nodexeyiaq-zz0p--3000.local-credentialless.webcontainer.io'
);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  const room = roomInput.value;
  if (message === '') return;
  displayMessage(message);
  messageInput.value = '';
});

joinRoomButton.addEventListener('click', () => {
  const room = roomInput.value;
});

function displayMessage(message) {
  const div = document.createElement('div');
  div.textContent = message;
  document.getElementById('message-container').append(div);
}
