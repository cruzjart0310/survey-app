import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
	selector: 'app-authorize',
	templateUrl: './authorize.component.html',
	styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

	@Input()
	rol!: string;

	constructor(private securityService: SecurityService) { }

	ngOnInit(): void {
	}

	isAuthorized(): boolean {
		if (this.rol) {
			return this.securityService.getRol() === this.rol;
		} else {
			return this.securityService.isLogged();
		}

	}
}
