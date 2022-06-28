
function myFunction1(p1, p2){
    return p1 * p2;
}
document.getElementById("demo1").innerHTML = myFunction1(4, 3);


var x = myFunction2(5,4);
document.getElementById("demo2").innerHTML = x;
function myFunction2(a,b){
    return a * b;
}



function toCelsius(f) {
    return (5/9)*(f-32);
}
document.getElementById("demo3").innerHTML = toCelsius(77);



document.getElementById("demo4").innerHTML = toCelsius;