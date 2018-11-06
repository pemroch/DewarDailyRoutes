// Shaded Models
import {
    Comment,
    Customer,
    Driver,
    Location,
    PickUpItem,
    Rate,
    RatePerDrop,
    RouteAddress,
    RouteConfirmation,
    Truck,
    Trailer
} from '@shared/models';

export interface Route {
    id: string;
    customers: Customer[];
    loadMonth: number;
    routeNumber: number;
    dateAdded: number;
    rate: Rate;
    ratePerDrop: RatePerDrop[];
    truck: Truck;
    trailer: Trailer;
    driver: Driver;
    temp: number;
    loadLocation: Location;
    loadDate: number;
    origin: RouteAddress;
    destination: RouteAddress;
    miles: number;
    noOfStops: number;
    pickUpItems: PickUpItem[];
    refNumber1: string;
    refNumber2: string;
    refNumber3: string;
    comments: Comment[];
    confirmation: RouteConfirmation;
}
