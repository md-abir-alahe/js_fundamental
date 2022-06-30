//Exercise 1
{
    let text = "dasjfhiuehriauh ewjhjknkjhhjasdfkj";
    document.getElementById("demo1").innerHTML = text.length;

}
//Exercise 2
{
    let text = "We are the so-called \"Vikings\" from the north.";
    document.getElementById("demo2").innerHTML = text;
}
//Exercise 3
{
    document.getElementById("demo3").innerHTML =
        "Hello Dolly!";
}
//Exercise 4
{
    document.getElementById("demo4").innerHTML = "Hello \
    Dolly!";
}
//Exercise 5
{
    document.getElementById("demo5").innerHTML = "Hello " +
        "Dolly!";
}
//Exercise 6
//If you uncomment this all of javascript code will crash. only because of backslash.
/*
{
    document.getElementById("demo6").innerHTML = \
    "Hello Dolly.";
}
*/
//Exercise 7
{
    //x is a string
    let x = "John";

    //y is an object
    let y = new String("Abir");

    document.getElementById("demo7").innerHTML =
        typeof x + "<br>" + typeof y;
}
//Exercise 8
{
    let x = "John"; // x is a string
    let y = new String("John") // y is a object
    document.getElementById("demo8").innerHTML = (x === y);
    //result will be false
}
//Exercise 9
{
    let x = new String("Abir");
    let y = new String("Abir");

    document.getElementById("demo9_1").innerHTML = (x == y);

    document.getElementById("demo9_2").innerHTML = (x === y);
}
//Exercise 10
{
    let str = "Apple, Banana, Kiwi"
    document.getElementById("demo10_1").innerHTML = str.slice(7, 13);
    document.getElementById("demo10_2").innerHTML = str.slice(-12, -6);
}
//Exercise 11
{
    let str = "Apple, Banana, Kiwi"

    document.getElementById("demo11_1").innerHTML = str.slice(7);
    document.getElementById("demo11_2").innerHTML = str.slice(-12);
}
//Exercise 12
//This is not working
/*
{
    let str = "Apple, Banana, Kiwi"
    document.getElementById("demo12_1").innerHTML = str.substr(7, 6);
    document.getElementById("demo12_2").innerHTML = str.substr(-12, 6);
}
*/
//Exercise 13
{
    function myFunction() {
        let text = document.getElementById("demo13").innerHTML;

        document.getElementById("demo13").innerHTML =
            text.replace("Microsoft", "W3Schools");
    }
}
//Exercise 14
{
    function myFunction14() {
        let text = document.getElementById("demo14").innerHTML;

        document.getElementById("demo14").innerHTML =
            text.replace("Microsoft", "W3School");
    }
}
//Exercise 15
{
    function myFunction15() {
        let text = document.getElementById("demo15").innerHTML;

        document.getElementById("demo15").innerHTML =
            text.replace(/Microsoft/i, "W3School");
    }
}
//Exercise 16
{
    function myFunction16() {
        let text = document.getElementById("demo16").innerHTML;

        document.getElementById("demo16").innerHTML =
            text.replace(/Microsoft/g, "W3Schools");
    }
}
//Exercise 17
{
    function myFunction17() {
        let text = document.getElementById("demo17").innerHTML;
        document.getElementById("demo17").innerHTML =
            text.toUpperCase();
    }
}
//Exercise 18
{
    function myFunction18() {
        let text = document.getElementById("demo18").innerHTML;

        document.getElementById("demo18").innerHTML =
            text.toLocaleLowerCase();
    }
}
//Exercise 19
{
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

    document.getElementById("demo19").innerHTML = text3;
}
//Exercise 20
{
    let text1 = "             Hello World!               ";
    let text2 = text1.trim();



    document.getElementById("demo20").innerHTML =
        "Length text1=" + text1.length + "<br>Length text2=" + text2.length;
    document.getElementById("demo20_1").innerHTML = text2;
}
//Exerscise 21
{
    let text = "5";

    document.getElementById("demo21").innerHTML = text.padStart(5, "x");
}
//Exercise 22
{
    let numb = 5;
    let text = numb.toString();

    document.getElementById("demo22").innerHTML = text.padStart(4, 0);
}
//Exercise 23
{
    let text = "5";
    document.getElementById("demo23").innerHTML = text.padEnd(4, "x");
}
//Exercise 24
{
    let numb = 6;
    let text = numb.toString();

    document.getElementById("demo24").innerHTML = text.padEnd(4, "y");
}
//Exercise 25
{
    var text = "Hello WOrld";
    document.getElementById("demo25").innerHTML = text.charAt(0);
}
//Exercise 26
{
    let text = "Hello World";
    document.getElementById("demo26").innerHTML = text.charCodeAt(0);
}
//Exercise 27
{
    let text = "a,b,c,d,e,f,g,h,i,j,k,l";
    const myArry = text.split(",");

    document.getElementById("demo27").innerHTML = myArry[0];
}