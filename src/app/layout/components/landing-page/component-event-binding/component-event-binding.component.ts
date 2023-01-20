import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-component-event-binding',
	templateUrl: './component-event-binding.component.html',
	styleUrls: ['./component-event-binding.component.scss']
})
export class ComponentEventBindingComponent implements OnInit {
	cities: Array<string> = ['Mexico', 'USA', 'Japan'];
	name!: string;
	selection!: string;

	constructor() { }

	ngOnInit(): void {
	}

	onClicked(city: string): void { //event: Event
		console.log(city);
		this.selection = city;
	}

	onClear() {
		this.selection = '';
	}

}
