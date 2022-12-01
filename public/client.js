const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')  
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Game App</title>
// </head>

// <style>
//     #box{
//         display: flex;
//         padding: 15%;
//     }
// </style>

// <body>
//     <div id="box">
//     <div id="player1" onclick="player1">
//         <h1>Player 1</h1>
//     <h2>100</h2>
//     <button onclick="OpponentPower()">Attack</button>
//     </div>
//     <hr>
//     <div id="player2">
//         <h1>Player 2</h1>
//     <div id="container"></div>
//     </div>
//     </div>

// </body>
// </html>
// <script src="/socket.io/socket.io.js"></script>
// <script>
//     const socket = io()


// let container = document.querySelector("#container")
// let power = document.createElement("h2")
// power.setAttribute("id", ("get"))
// power.innerText = 100;

// container.append(power)

// function OpponentPower() {
//     random = (Math.floor((Math.random()*6)+1));
//     let power = Number(get.innerText)
//     get.innerText = power -random
//     promptFun(power)
//     ws.emit(
//         "score", power
//     )
// }
// ws.on("score",(power)=>{
//     let num = Number(get.innerText)
//     console.log(num)
//     get.innerText = num -random
    
// })

// function promptFun(power){
// if(power<0){
//     alert("You Win")
// }
// }

// let name;

// do {
//     name = prompt('Please enter your name: ')
// } while(!name)

// container1.addEventListener('keyup', (e) => {
//     if(e.key === 'Enter') {
//         userName(e.target.value)
//     }
// })
// // function userName(name) {
    
// //         user: name,
    
    
// //     container1.appendMessage(user)
// //     textarea.value = ''
    

     
// //     socket.emit('attack', atk)

// // }



// </script>