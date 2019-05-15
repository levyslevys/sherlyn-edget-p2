// Array to store messages
var messages = [];

// Message Type lookup object, Similar to an enum.
var messageType = {
out: 'out-message',
in: 'in-message',
unknown: 'unknown-message'
};

// Message seed data (optional)
var data = [
{
type: messageType.out,
user: 'Colin',
message: 'Mom, what is for dinner?'
},
{
type:messageType.in,
user:'Mom',
message:'Would you like spaghetti or burgers?'
}
];

//header element
var myDate = new Date();
var time;
time = myDate.getHours();
if(time<11){
document.getElementById("topheading").innerHTML = "<h1>Good Morning!</h1>";
} else if(time<12){
    document.getElementById("topheading").innerHTML = "<h1>Good Afternoon!</h1>";
} else {
    document.getElementById("topheading").innerHTML = "<h1> Good Night!</h1>";
}
//
document.getElementById("topheading").innerHTML = "<h1> Good Morning!</h1>";

//footer element 
document.getElementById("myFooter").innerHTML = "<h3>Copyright &copy;2019</h3>";


// Message constructor function
function Message(type, user, message) {
this.type = type;
this.user = user;
this.message = message;
}

// Function to create and return an element for the supplied message
function createMessageElement(message) {
// Create text element for the message
var messageText = document.createTextNode(
message.user + ': ' + message.message
);

// Create the element and add the message text.
var messageEl = document.createElement('div');
messageEl.appendChild(messageText);

// Add a class using the message type.
messageEl.className = message.type;

return messageEl;
}

// Button click event handler to add a new message
function addMessageHandler(event) {
  var user, type;

// Get element references
var messageInputEl = document.getElementById('message-input');
var messageContainerEl = document.getElementById('message-container');

// Determine which button was clicked, then set message variables accordingly.
switch (event.target.id) {
case 'send-button':
user = 'Colin';
type = messageType.out;
break;
case 'reply-button':
user = 'Mom';
  type = messageType.in;
      break;
}

  // Create new message.
  if (messageInputEl.value != '') {
    // Construction a message an add it to the array.
    var message = new Message(type, user, messageInputEl.value);
    messages.push(message);

    // Create a message element.
    var el = createMessageElement(message);

    // Add the message element to the DOM.
    messageContainerEl.appendChild(el);

    // Reset input.
    messageInputEl.value = '';
  }
}
function init() {
  // Wire event handlers
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

  // Get a reference to messages container
  var messageContainerEl = document.getElementById('message-container');

  // Load seed data (optional)
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    // Construct a new message and add to messages array
    var message = new Message(item.type, item.user, item.message);
    messages.push(message);

    // Create message element
    var el = createMessageElement(message);

    // Add message to DOM.
    messageContainerEl.appendChild(el);
  }
}
