const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        const color = e.target.id;
        switch(color){
            case 'grey' : body.style.backgroundColor = color
            break;
            case 'white' : body.style.backgroundColor = color
            break;
            case 'blue' : body.style.backgroundColor = color
            break;
            case 'orange' : body.style.backgroundColor = color
            break;
            case 'green' : body.style.backgroundColor = color
            break;
        }
    })
})