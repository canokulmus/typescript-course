
interface Vehicle {

    travelTo(point: Point): void;// fonksiyon gövdesiz bir şekilde oluşturulur ve daha sonra tanımlanır.

}

interface Point {
    x: number,
    y: number
}


class Taxi implements Vehicle {


    constructor(private location?: Point, private color?: string) { }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${this.location.x} Y:${this.location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }

}


let taxi_1: Taxi = new Taxi({ x: 1, y: 2 }, "black");
taxi_1.travelTo({ x: 1, y: 2 })


let taxi_2: Taxi = new Taxi({ x: 1, y: 2 });
