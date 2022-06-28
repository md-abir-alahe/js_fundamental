//Exercise 1
function myFunction1(p1, p2){
    return p1 * p2;
}
document.getElementById("demo1").innerHTML = myFunction1(4, 3);

//Exercise 2
var x = myFunction2(5,4);
document.getElementById("demo2").innerHTML = x;
function myFunction2(a,b){
    return a * b;
}


//Exercise 3
function toCelsius(f) {
    return (5/9)*(f-32);
}
document.getElementById("demo3").innerHTML = toCelsius(77);

//Exercise 4

document.getElementById("demo4").innerHTML = toCelsius;

//Exercise 5

function toCelsius5(f){
    return (5/9) * (f-32);
}
document.getElementById("demo5").innerHTML = 
"The temperature is " + toCelsius5(77) + " Celsius";

//Exercise 6
myFunction6()

function myFunction6() {
    let carName = "Volvo";
    document.getElementById("demo6_1").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo6_2").innerHTML = typeof carName;



