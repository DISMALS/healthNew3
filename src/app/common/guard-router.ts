import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class CanActivateTeam implements CanActivate {
    constructor(public route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
        console.log(route);
        console.log(state);
        let isSkip = false;
        if(!isSkip){
            this.route.navigate(['/login']);
            return isSkip;
        }
        return true;
    }
}