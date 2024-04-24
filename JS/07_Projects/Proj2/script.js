const form = document.querySelector('form')

// do not do this before the event listener 
// it gives an empty value
// const height = document.querySelector('#height')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // ells the user agent that the default action of an event should not be taken if it is not explicitly handled

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const user = document.querySelector('#user');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Enter a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Enter a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            user.innerHTML = `<h2>Underweight</h2>`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            user.innerHTML = `<h2>Normal</h2>`
        }
        else {
            user.innerHTML = `<h2>Overweight</h2>`
        }

    }

});