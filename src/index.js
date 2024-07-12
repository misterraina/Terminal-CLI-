//root element
const root = document.getElementById("app")

// div to hold textarea and output
const window_div = document.createElement("div")
root.appendChild(window_div)  //append div to root
window_div.className = "main_div"  // adding className

//Adding P and H elements to Terminal div for Message
const message = document.createElement('div')
message.innerHTML=`
<p>Hello there press ls for more commands</p>
`
window_div.appendChild(message)

//create container for command outputs
const commandOutputDiv = document.createElement('div')
commandOutputDiv.className = 'command-output'
window_div.appendChild(commandOutputDiv)

//Creating a Div Container and span for liner @host/ayush/pc |
const inputContainer = document.createElement("div")
inputContainer.className = "input-container"
window_div.appendChild(inputContainer)

// Step 5: Create a span element for the prompt
const promptCliMessage = document.createElement("p");
promptCliMessage.textContent = "web_host@ayush.dev/cli~";
inputContainer.appendChild(promptCliMessage);

// adding another element span 
const promptSpan = document.createElement("span");
promptSpan.textContent = "$";
inputContainer.appendChild(promptSpan);

 // Step 6: Create an input element for user input
 const inputField = document.createElement("input");
 inputField.type = "text";
 inputContainer.appendChild(inputField);

// Focus on the input field when the page loads
inputField.focus();

const commandHistory = []
let historyIndex = -1

//Event Listeners
inputField.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault(); 
        let text = inputField.value.trim()
        if (text){
            commandHistory.push(text)
            historyIndex = -1

            defaultOutput(text)
            commander(text)
            inputField.value = ''
          
        }
    } else if(event.key === 'ArrowUp'){
        // Scroll through command history (up)
        if (commandHistory.length > 0){
            if(historyIndex === -1){
                historyIndex = commandHistory.length - 1
            } else if(historyIndex > 0){
                historyIndex --
            }
            inputField.value = commandHistory[historyIndex]
        }
    } else if(event.key === 'ArrowDown'){
        // Scroll through command history [down]
        if (commandHistory.length > 0 && historyIndex !== -1) {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                inputField.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1;
                inputField.value = '';
            }
        }
    }
})

// Window Div Event Listeners Focus input field click anywhere
window_div.addEventListener('click', () => {
    inputField.focus()
    focusTimeout(10000)
})

// Write addLine function
function addLine(text, classNam) {
    const p4 = document.createElement('p')
    p4.textContent = text
    p4.className = classNam
    commandOutputDiv.appendChild(p4)
    window_div.scrollTop = window_div.scrollHeight
}

//default function to add message to commandOutput
function defaultOutput(text) {
    //this is the main command 
    const p1 = document.createElement('p')
    p1.className = 'p1'
    p1.textContent = 'web_host@ayush.dev/cli~'

    //this is $
    const p2 = document.createElement('span')
    p2.className = 'p2'
    p2.textContent = '$'

    //this is the command i input
    const p3 = document.createElement('span')
    p3.className = 'p3'
    p3.textContent = text

    // add them to window_div 
    commandOutputDiv.appendChild(p1)
    commandOutputDiv.appendChild(p2)
    commandOutputDiv.appendChild(p3)
}

// Function to handle different commands
function commander(cmd) {
    switch (cmd) {
        case 'ls':
            // List all available commands
            addLine('ls, clear, about, skills, projects, social, contact', 'output-return1');
            break;

        case 'clear':
            clear();
            break;

        case 'about':
            addLine('This is a CLI application developed by Ayush Raina.', 'output-return1');
            break;

        case 'skills':
            addLine('Skills: JavaScript, React, Node.js, Express, MongoDB, SQL, Tailwind CSS', 'output-return1');
            break;

        case 'projects':
            addLine('Projects: E-commerce website, Book tracker, To-do app, Streaming platform', 'output-return1');
            break;

        case 'social':
            addLine('Social: LinkedIn - linkedin.com/in/ayush-raina', 'output-return1');
            break;

        case 'contact':
            addLine('Contact: Email - ayush@example.com', 'output-return1');
            break;

        default:
            addLine('Unknown command: ' + cmd, 'output-return2');
            break;
    }
}

// Function to clear the output
function clear() {
    commandOutputDiv.innerHTML = '';
}

