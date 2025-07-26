const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const qaPairs = {
  "medications": "Medications include chloroquine, ACTs, and quinine.",
  "mosquito carries malaria": "The female Anopheles mosquito is responsible for spreading malaria.",
  "malaria virus or parasite": "Malaria is caused by a parasite, not a virus.",
  "malaria recur": "Yes, malaria can return if not fully treated or due to relapse.",
  "malaria contagious": "No, malaria does not spread from person to person directly.",
  "diagnosed": "Malaria is diagnosed using a blood test to detect parasites.",
  "malaria vaccine": "Yes, RTS,S/AS01 (Mosquirix) is a vaccine for malaria.",
  "where found": "Malaria is prevalent in Sub-Saharan Africa, Asia, and parts of South America.",
  "prevent malaria": "Prevent malaria by using insecticide-treated nets, repellents, and avoiding mosquito bites.",
  "misconceptions": "Some think malaria spreads through air or contact, which is false.",
  "symptoms appear": "Symptoms typically appear 10–15 days after the bite.",
  "causes": "Malaria is caused by Plasmodium parasites transmitted through infected mosquito bites.",
  "symptoms": "Common symptoms include fever, chills, headache, nausea, and muscle pain.",
  "pregnancy": "Pregnant women are at higher risk of severe malaria and complications.",
  "drug-resistant": "Drug resistance occurs when parasites survive standard treatments.",
  "complications": "Complications include anemia, organ failure, and cerebral malaria.",
  "cured completely": "Yes, malaria can be completely cured with proper treatment.",
  "best treatment": "Antimalarial drugs like artemisinin-based combination therapies (ACTs) are the most effective.",
  "how spread": "Malaria spreads through the bite of infected female Anopheles mosquitoes.",
  "early signs": "Early signs include fever, chills, fatigue, and sweating."
};

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage("You: " + message, "user-message");

  const response = getBotResponse(message.toLowerCase());
  setTimeout(() => {
    displayMessage("Bot: " + response, "bot-message");
  }, 500);

  userInput.value = "";
}

function getBotResponse(input) {
  for (const key in qaPairs) {
    if (input.includes(key)) {
      return qaPairs[key];
    }
  }
  return "I'm sorry, I don't have an answer to that. Please ask another question about malaria.";
}

function displayMessage(text, className) {
  const msg = document.createElement("div");
  msg.className = className;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
