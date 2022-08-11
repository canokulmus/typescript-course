
interface Vehicle {

    currentLocation: Point;
    travelTo(point: Point): void;// fonksiyon gövdesiz bir şekilde oluşturulur ve daha sonra tanımlanır.

}

interface Point {
    x: number,
    y: number
}


class Taxi implements Vehicle {

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x} Y:${point.y} konumunda gidiyor.`)
    }

}



class Bus implements Vehicle {

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs X: ${point.x} Y:${point.y} konumunda gidiyor.`)
    }

}