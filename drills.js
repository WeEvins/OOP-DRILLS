
class Family {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greet() {
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
    constructor(make, model, wheels, doors, ) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.doors = doors;

    }
    aboutVehicle() {
        console.log(`I am a/an ${this.make} ${this.model}, and I have ${this.wheels} many wheels.`);
    }
};


// make, model, wheel#, doors#, boolean truck bed t/f, good gas mileage y/n; 
//vehicle size s,m,l ; motorcycle has handlebars, shows property no doors;

//have method aboutVehicle reflect unique features


class Truck extends Vehicle {
    constructor(make, model, wheels, doors, hasBed; ) {
        super(make, model, wheels, doors)
        this.hasBed = hasBed;
        
    }

};

class Car extends Vehicle {
    constructor(make, model, wheels, transmission) {
        super(make, model, wheels)
        this.transmission = transmission;
        this.doors = doors;
    }
    aboutVehicle(){
        console.log(`I am a/an ${this.make} ${this.model}. I have ${this.wheels} wheels, and my transmission is ${this.transmission}.`);
    }
};

class Bike extends Vehicle {
    constructor(make, model, wheels, engineSize) {
        super(make, model, wheels)
        this.engineSize = engineSize;
    }
    
};

let car1 = new Car('audi', 'r8', 4, 'flappy');
let car2 = new Car('fiat', '500c Abarth', 4, 'manual');
let car3 = new Car('mazda', 'six', 4, 'automatic');
// let bike1 = 
// let bike2 = 
// let bike3 =

car1.aboutVehicle();
car2.aboutVehicle();
car3.aboutVehicle();