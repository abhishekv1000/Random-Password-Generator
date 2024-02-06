const passbox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&";



function createpass(){
    let password ="";

    while(length > password.length){
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lower[Math.floor(Math.random()*lower.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    }
    passbox.value=password;
}