
interface Vehicle {

    travelTo(point: Point): void;// fonksiyon gövdesiz bir şekilde oluşturulur ve daha sonra tanımlanır.

}

interface Point {
    x: number,
    y: number
}


class Taxi implements Vehicle {


    constructor(private _location?: Point, private _color?: string) { }

    travelTo(point: Point): void {
        // console.log(`Taksi X: ${this._location.x} Y:${this._location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor.`)
    }

    get location() {
        return this._location ? this._location : { x: 0, y: 0 }
    }

    set location(value: Point) {

        if (value.x < 0 || value.y < 0) {
            throw new Error("Koordinat bilgileri negatif olamaz")
        }
        this._location = value;
    }

}


let taxi_1: Taxi = new Taxi({ x: 1, y: 2 }, "black");
// taxi_1.travelTo({ x: 1, y: 2 })

taxi_1.location = { x: 2, y: 5 }

