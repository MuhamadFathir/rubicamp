class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }
}

class Car {
    constructor(varian, sn, door, seat) {
        this.varian = varian
        this.sn = sn
        this.door = door
        this.seat = seat    
    }

}

class Agya extends Car {
    constructor(varian, sn, door, seat){
        super(varian, sn, door, seat)
        this.tyre = new Tyre('Dunlop', 15)
    }

    specAgya(){
        console.log(`
            varian : ${this.varian}
            sn     : ${this.sn}
            door   : ${this.door}
            seat   : ${this.seat} seater
            tyre   : ${this.tyre.brand} ${this.tyre.size} inch
            `)
    }
}

const car1 = new Agya('Agya', 6345, 5, 5)
car1.specAgya()


class Rush extends Car {
    constructor(varian, sn, door, seat){
        super(varian, sn, door, seat)
        this.tyre = new Tyre('Bridgestone', 17)
    }

}

class CarFactory {
    constructor() {
        this.cars = []
    }

    produce(year) {

    }
    result(){
        
    }

    guarabteeSimulation(simulationYear) {

    }
}

// const toyota = new CarFactory()
// toyota.produce(2020)
// toyota.produce(2022)
// toyota.result()
// toyota.guarabteeSimulation(2025)
