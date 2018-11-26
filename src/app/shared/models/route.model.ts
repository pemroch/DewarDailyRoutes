import {
    Comment,
    Customer,
    Driver,
    Location,
    PickUpItem,
    Rate,
    Truck,
    Trailer
} from '@shared/models';

export interface Route {
    id: string;
    customers: Customer[];
    routeNumber: number;
    rate: Rate;
    ratePerStopEach: number[];
    truck: Truck;
    trailer: Trailer;
    driver: Driver;
    driverEta: any;
    temp: number;
    loadLocation: Location;
    loadDate: any;
    origin: {
        city: string;
        state: string;
    };
    destination: {
        city: string;
        state: string;
    };
    miles: number;
    noOfStops: number;
    pickUpItems: PickUpItem[];
    refNumber1: string;
    refNumber2: string;
    refNumber3: string;
    comments: Comment[];
    confirmation: {
        email: string;
        date: number;
        confirmed: boolean;
    };
}
