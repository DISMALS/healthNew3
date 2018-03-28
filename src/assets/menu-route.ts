export const MenuRouteList: Array<RouteObj> = [
    {
        id: 1,
        route: 'home'
    }, {
        id: 2,
        route: 'appointment'
    }, {
        id: 3,
        route: 'patients'
    }, {
        id: 4,
        route: 'report'
    }, {
        id: 5,
        route: 'clinic'
    }, {
        id: 6,
        route: 'billing'
    }, {
        id: 7,
        route: 'operation'
    }, {
        id: 8,
        route: 'scrm'
    }, {
        id: 9,
        route: 'knowledge'
    }, {
        id: 10,
        route: 'configuration'
    }
];

export class RouteObj {
    public id: number;
    public route: string;
}
