import { Taxi } from './Taxi';






let taxi_1: Taxi = new Taxi({ x: 1, y: 2 }, "black");
// taxi_1.travelTo({ x: 1, y: 2 })

console.log(taxi_1.location)

console.log(taxi_1.location)
taxi_1.location = { x: 2, y: 5 }
console.log(taxi_1.location)

