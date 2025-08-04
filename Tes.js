//   function sapa(nama) {
//     console.log("Halo, " + nama + "!");
//    }

//    sapa("budi");
//    sapa("agus");    


// function tambah (a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("hasil: " + hasil);


// let car = {
//     name: "Ferrari",
//     model: "F40",
//     weight: "1100kg",
//     color: "red",

//     start: function() {
//         console.log("Mobil dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil berjalan.");
//     },
//     brake: function() {
//         console.log("Mobil mengerem.");
//     },
//     stop: function() {
//         console.log("Mobil berhenti.");
//     }
// };
// console.log(car.name);
// console.log(car.model);
// console.log(car.weight);
// console.log(car.color);

// car.start();
// car.drive();
// car.brake();
// car.stop();

// let bike = {
//     brand: "Polygon",
//     gear: 7,
//     color: "biru",

//     start: function() {
//         console.log("Sepeda mulai dikayuh.");
//     },
//     brake: function() {
//         console.log("Sepeda mengerem.");
//     }
// };

// console.log(bike.brand);
// console.log(bike.gear);
// console.log(bike.color);

// bike.start();
// bike.brake();

// function Car(name, model, color, weight) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.weight = weight;

//     this.start = function() {
//         console.log(`${this.name} dinyalakan.`);
//     };

//     this.drive = function() {
//         console.log(`${this.name} sedang berjalan.`);
//     };
// }

// let car1 = new Car("Toyota", "Camry", "Hitam", "1500kg");
// let car2 = new Car("Honda", "Civic", "Putih", "1400kg");

// car1.start();
// car2.start();

// class Car {
//     constructor(name, model, color, weight) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }
//     start () {
//         console.log(`${this.name} dinyalakan.`);
//     }
//     drive () {
//         console.log(`${this.name} berjalan.`);
//     }
// }

// let car1 = new Car("Toyota", "Camry", "Hitam", "1500kg");
// car1.start();

// Bike dengan class
// class Bike {
//     constructor(brand, gear, color) {
//         this.brand = brand;
//         this.gear = gear;
//         this.color = color;
//     }
 
//     start() {
//         console.log("Sepeda mulai dikayuh.");
//     }

//     brake() {
//         console.log("Sepeda mengerem.");
//     }
// }

// let bike1 = new Bike("Polygon", 21, "biru");

// console.log(bike1.brand);
// console.log(bike1.gear);
// console.log(bike1.color);

// bike1.start();
// bike1.brake();

class Student {
    constructor(name, nim, department, year) {
        this.name = name;
        this.nim = nim;
        this.department = department;
        this.year = year;
    }

    introduce() {
        console.log(`Halo, saya ${this.name}, mahasiswa ${this.department} angkatan ${this.year}`);
    }

    isSenior() {
        return this.year < 2025;
    }
}

let mahasiswa1 = new Student("Budi", "22040123", "Teknik Informatika", 2022);
let mahasiswa2 = new Student("Agus", "25070145", "Sistem Informasi", 2025);

mahasiswa1.introduce();
console.log(mahasiswa1.isSenior());

mahasiswa2.introduce(); 
console.log(mahasiswa2.isSenior()); 
