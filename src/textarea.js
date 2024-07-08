import myCli from "./constants.js"

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
const promptSpan = document.createElement("span");
promptSpan.textContent = "web_host@ayush.dev/cli~";
inputContainer.appendChild(promptSpan);

 // Step 6: Create an input element for user input
 const inputField = document.createElement("input");
 inputField.type = "text";
 inputContainer.appendChild(inputField);

// Focus on the input field when the page loads
inputField.focus();

//Event Listeners
inputField.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault(); 
        let text = inputField.value.trim()
        if(text==='ls'){
            addLine(`${myCli}`, `#00ff00`)
            addLine(`${text}`, `yellow`)
            addLine(`welocme`)
        }else{
            addLine(`${myCli}`, `#00ff00`)
            addLine(`${text}`, `red`)
            addLine(`wrong input`)
        }
        inputField.value = ''
    }
})

// Write addLine function
function addLine(text, color) {
    const p = document.createElement('p')
    p.textContent = text
    if (color) {
        p.style.color = color
    }
    commandOutputDiv.appendChild(p)
    window_div.scrollTop = window_div.scrollHeight
}

// commander functionS
// previous command function
// clear functionS


