class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }
}

class Car {
    constructor(varian, sn, door, seat, year, warranty) {
        this.varian = varian
        this.sn = sn
        this.door = door
        this.seat = seat
        this.year = year
        this.warranty = warranty
    }

}

class Agya extends Car {
    constructor(varian, sn, door, seat, year, warranty) {
        super(varian, sn, door, seat, year, warranty)
        this.tyre = new Tyre('Dunlop', 15)
    }


}



class Rush extends Car {
    constructor(varian, sn, door, seat, year, warranty) {
        super(varian, sn, door, seat, year, warranty)
        this.tyre = new Tyre('Bridgestone', 17)
    }

}

class CarFactory {
    constructor() {
        this.cars = []
    }

    static count() {
        return Math.floor(Math.random() * 10)
    }

    produce(year) {

        for (let i = 0; i < CarFactory.count(); i++) {
            this.cars.push(new Agya('Agya', crypto.randomUUID(), 5, 5, year, 1))

        }

        for (let i = 0; i < CarFactory.count(); i++) {
            this.cars.push(new Rush('Rush', crypto.randomUUID(), 5, 5, year, 3))

        }

    }

    result() {
        console.log('Hasil Prosuksi')
        for (let i = 0; i < this.cars.length; i++) {
            console.log(`
no.${i + 1}
varian  : ${this.cars[i].varian}
sn      : ${this.cars[i].sn}
door    : ${this.cars[i].door}
seat    : ${this.cars[i].seat} seater
tyre    : ${this.cars[i].tyre.brand} ${this.cars[i].tyre.size} inch
year    : ${this.cars[i].year}
warranty: ${this.cars[i].warranty} year
                `)
        }

    }

    guaranteeSimulation(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear} :`);
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].year + this.cars[i].warranty !== simulationYear) {
                console.log(`
no.${i + 1}
varian  : ${this.cars[i].varian}
sn      : ${this.cars[i].sn}
door    : ${this.cars[i].door}
seat    : ${this.cars[i].seat} seater
tyre    : ${this.cars[i].tyre.brand} ${this.cars[i].tyre.size} inch
year    : ${this.cars[i].year}
warranty: ${this.cars[i].warranty} year

status on ${simulationYear} this guarantee is expired`)
            } else {
                console.log(`
no.${i + 1}
varian  : ${this.cars[i].varian}
sn      : ${this.cars[i].sn}
door    : ${this.cars[i].door}
seat    : ${this.cars[i].seat} seater
tyre    : ${this.cars[i].tyre.brand} ${this.cars[i].tyre.size} inch
year    : ${this.cars[i].year}
warranty: ${this.cars[i].warranty} year

status on ${simulationYear} this guarantee is active`)
            }

        }
    }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)
