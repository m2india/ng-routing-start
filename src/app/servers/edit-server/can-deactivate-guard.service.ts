import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard  implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(
        component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
    
        return component.canDeactivate();
      }
}