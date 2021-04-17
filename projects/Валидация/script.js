document.querySelector(".b-1").addEventListener("click", () => {
    let data = document.querySelector(".i-1").value;
    // document.querySelector(".out-1").innerHTML = data;
    console.log(validate.capitalize(data));
});

document.querySelector(".b-2").addEventListener("click", () => {
    let data = +document.querySelector(".i-2").value;
    document.querySelector(".out-2").innerHTML += data;
});

document.querySelector(".i-3").addEventListener("input", () => {
    let data = document.querySelector(".i-3").value;
    document.querySelector(".out-3").innerHTML = data;
});


document.getElementById('submit').addEventListener("click", function validate() {
    var input = document.getElementById('number');
    var validityState_object = input.validity;
    console.log(input.validity);
    if (validityState_object.valueMissing){
        input.setCustomValidity('You gotta fill this out, yo!');
    }
    else if (validityState_object.rangeUnderflow){
        input.setCustomValidity('We need a higher number!');
    }
    else if (validityState_object.rangeOverflow){
        input.setCustomValidity('Thats too high!');
    }
    else{
        input.setCustomValidity('');
    }})  


