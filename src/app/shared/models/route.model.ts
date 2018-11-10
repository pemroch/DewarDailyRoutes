// Shaded Models
import {
    Comment,
    Driver,
    Location,
    Rate,
    RouteAddress,
    RouteConfirmation,
    Truck,
    Trailer
} from '@shared/models';

export interface Route {
    id: string;
    customers: string[];
    routeNumber: number;
    rate: Rate;
    ratePerDrop: number[];
    truck: Truck;
    trailer: Trailer;
    driver: Driver;
    driverEta: number;
    temp: number;
    loadLocation: Location;
    loadDate: any;
    origin: RouteAddress;
    destination: RouteAddress;
    miles: number;
    noOfStops: number;
    pickUpItems: string[];
    refNumber1: string;
    refNumber2: string;
    refNumber3: string;
    comments: Comment[];
    confirmation: RouteConfirmation;
}
