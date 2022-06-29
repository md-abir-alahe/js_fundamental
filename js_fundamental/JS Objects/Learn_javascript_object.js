// Exercise 1
{
    //create an object
    const car = { type: "Fiat", model: "500", color: "white" };
    // Display some data from the object: 
    document.getElementById("demo1").innerHTML =
        "The car type is " + car.type + "<br>" +
        "The car model is " + car.model + "<br>" +
        "The car color is " + car.color;
}
// Exercise 2
{
    //create an object
    const person = {
        firstName: "MD Abir",
        lastName: "Alahe",
        age: 19,
        eyecolor: "Black"
    };

    // Display some data from the object:
    document.getElementById("demo2").innerHTML = person.firstName + " is " + person.age + " years old."
}
//Exercise 3
{
    //create an object
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5569
    };

    // Display some data from the object:
    document.getElementById("demo3_1").innerHTML = person.firstName + " " + person.lastName;

    // Display some data from the object by using diffrent way:
    document.getElementById("demo3_2").innerHTML = person["firstName"] + "'s id is " + person["id"];
}
//Exercise 4
{
    // Create an object
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5588,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };

    // Display some data from the object by using 
    document.getElementById("demo4").innerHTML = person.fullName();
}