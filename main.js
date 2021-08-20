let buttons = document.querySelectorAll('.letter'),
    btnSpace = document.querySelector('.space'),
    par = document.querySelector('p');

buttons.forEach(el => 
    el.addEventListener('click', function (e) {
        par.innerText += e.currentTarget.innerText;
    })
)

btnSpace.addEventListener('click', function() {
    par.innerText += btnSpace.value;
})

//---------------------Writing on the Keyboard---------------------------

function pressKey(e) {
   switch (e.keyCode) {
    case 32: //for space
        par.innerText += btnSpace.value;
    break; 
    case 8: //for backspace
        const editedWord = par.innerText.slice(0, -1)
        par.innerText = editedWord;
    break;
    case 16: //shift
        par.innerText.toUpperCase(); 
    break;
    case 20: //for capsLock
        par.innerText.toUpperCase(); 
    break;
    default: //for other keys
        par.innerText += e.key;
    }
}

window.addEventListener('keyup', pressKey);

// function pressKey(e) {
//     if(e.keyCode === 32) {     //for space
//         par.innerText += btnSpace.value;
//     } else if (e.keyCode === 8) {    //for backspace
//         const editedWord = par.innerText.slice(0, -1)
//         par.innerText = editedWord;
//     } else if (e.keyCode === 16 || e.keyCode === 20) {    // for shift and capsLock
//         par.innerText.toUpperCase();
//     } else {
//         par.innerText += e.key;    //for other keys
//     }
// }


