const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const replies = {
  hello: "Hi there! 😊 How can I assist you today?",
  "how are you": "I'm just a bot, but I’m always running at 100%! How can I help?",
  "account balance": "To check your balance, please log in to your FNB App or Online Banking.",
  "open account": "You can open an account online at www.fnb.co.za or visit your nearest branch.",
  "loan": "FNB offers personal loans, business loans, and more. Would you like to apply online?",
  bye: "Goodbye! If you need anything else, I'm always here.",
  default: "I'm not sure how to answer that. Try asking about accounts, loans, or how to contact us."
};

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const response = getBotReply(message.toLowerCase());
    displayMessage(response, "bot");
  }, 700);
}

function displayMessage(message, type) {
  const div = document.createElement("div");
  div.className = type === "user" ? "user-message" : "bot-message";
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  for (let key in replies) {
    if (input.includes(key)) {
      return replies[key];
    }
  }
  return replies.default;
}

