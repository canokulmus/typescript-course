


interface Vehicle {

    currentLocation: Point;

    travelTo(point: Point): void;// fonksiyon gövdesiz bir şekilde oluşturulur ve daha sonra tanımlanır.

    getDistance(pointA: Point, pointB: Point): number;

    addPassenger(passenger: Passenger): void;

    removePassenger(passenger: Passenger): void;

}

interface Passenger {
    name: string;
    phone: string;
}

interface Point {
    x: number,
    y: number
}
