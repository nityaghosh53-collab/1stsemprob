function checkTemprature(temperature) {
    let message = "";
    if (temperature < 20) {
        message = "Cold";
    } else if (temperature <= 30) {
        message = "Normal";
    } else {
        message = "Hot";
    }
    return message;
}

console.log(checkTemprature(13));
console.log(checkTemprature(24));
console.log(checkTemprature(56));