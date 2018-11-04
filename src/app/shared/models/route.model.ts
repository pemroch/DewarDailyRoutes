// Shaded Models
import { Comment, Driver, PickUp, Rate, RouteAddress, RouteConfirmation, RouteNumber, Truck, Trailer } from '@shared/models';

export interface Route {
    id: string;
    routeNumber: RouteNumber;
    dateAdded: number;
    rate: Rate;
    truck: Truck;
    trailer: Trailer;
    driver: Driver;
    temp: number;
    loadDate: number;
    origin: RouteAddress;
    destination: RouteAddress;
    miles: number;
    noOfStops: number;
    pickups: PickUp[];
    refNumber1: string;
    refNumber2: string;
    refNumber3: string;
    comments: Comment[];
    confirmation: RouteConfirmation;
}
