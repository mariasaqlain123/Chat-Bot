function sendMessage() {
  const input = document.getElementById('user-input');
  const userMessage = input.value;
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  // Simulate AI response
  setTimeout(() => {
      let botResponse = '';
      if (userMessage.toLowerCase().includes('What is java')) {
          botResponse = 'java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible..';
      } else if (userMessage.toLowerCase().includes('some horror books recommendation')) {
          botResponse = 'Here are some horror book recommendations: "It" by Stephen King, "The Haunting of Hill House" by Shirley Jackson, and "Bird Box" by Josh Malerman.';
      } else if (userMessage.toLowerCase().includes('How to make coffee ')) {
          botResponse = 'To make coffee: 1. Boil water. 2. Add coffee grounds. 3. Brew for 4-5 minutes. 4. Strain and enjoy!';
      } else {
          botResponse = 'What can I assist you with?';
      }
      appendMessage('bot', botResponse);
  }, 1000);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
