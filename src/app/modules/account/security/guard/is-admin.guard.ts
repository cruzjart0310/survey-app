import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../security.service';

@Injectable({
	providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

	constructor(private securityService: SecurityService,
		private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.securityService.getRol() === 'administrator') {
			return true;
		}

		this.router.navigate(['/login'])
		return false;
	}

}
