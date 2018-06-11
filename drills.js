
class Family {
    constructor (name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
greet(){
    console.log(`Hey! my name is ${this.name}. I am ${this.age} years old, and I live in ${this.city}.`)
}
};

let f1 = new Family('Adrien', 'France', 16);
let f2 = new Family('Hiccup', 'Berk', 25);
let f3 = new Family('Marina', 'Inkopolis', 23);
let f4 = new Family('Sora', 'the Destiny Islands', 18);
let f5 = new Family('Garnet', 'Alexandria', 19);


f1.greet();
f2.greet();
f3.greet();
f4.greet();
f5.greet();



// inheritence part
 class Vehicle {
     constructor(make, model, price) {
         this.make = make;
         this.model = model;
         this.price = price;
     }
 }

 class Car extends Vehicle{
     constructor(make, model, price, transmission){
         super (make, model, price)
         this.transmission = transmission;

     }
 };


class Bike extends Vehicle{
    constructor(make, model, price,){
    super (make, model, price)
}
};


class Boat extends Vehicle {
    constructor(make, model, price) {
        super (make, model, price)
    }
};