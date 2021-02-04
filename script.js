//array with the random messages that will be displayed

const msg = [
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream bigger.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Success doesn’t just find you.You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
];

//The function that will randomly choose the message from the array

function messages() {
  const displayMessage = document.getElementById("display");
  let show = msg[Math.floor(Math.random() * msg.length)];
  displayMessage.innerHTML = show;
}
messages();
