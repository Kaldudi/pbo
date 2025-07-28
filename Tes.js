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

let bike = {
    brand: "Polygon",
    gear: 7,
    color: "biru",

    start: function() {
        console.log("Sepeda mulai dikayuh.");
    },
    brake: function() {
        console.log("Sepeda mengerem.");
    }
};

console.log(bike.brand);
console.log(bike.gear);
console.log(bike.color);

bike.start();
bike.brake();
