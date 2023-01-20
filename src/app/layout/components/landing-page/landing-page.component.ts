import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnChanges, OnInit, OnDestroy {

	name = 'hola';

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		console.log('onChanged')
	}

	ngOnInit(): void {

	}

	ngOnDestroy(): void {
		console.log('onDestroy')
	}

	onClear() {
		this.name = '';
	}
}
