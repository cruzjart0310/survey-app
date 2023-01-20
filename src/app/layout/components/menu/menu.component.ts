import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Event as NavigationEvent } from '@angular/router';
import { SecurityService } from 'src/app/modules/account/security/security.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	constructor(private router: Router,
		public service: SecurityService) { }

	ngOnInit(): void {
		this.service.selectedCity$.subscribe((city: any) => {
			console.log(city);
		})
	}

	redirect() {
		this.router.navigate(['surveys']);
	}

	logOut(): void {
		this.service.logOut()
			.subscribe({
				next: (response: any) => {
					this.service.removeToken();
					this.router.navigate(['/login']);
				},
				error: (error: any) => {
					console.error(error);
				},
				complete: () => console.info('completed')
			});
	}

	getEmail(): string {
		return this.service.getFieldJWT('email');
	}
}
