import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-component-granddaughter-b',
	templateUrl: './component-granddaughter-b.component.html',
	styleUrls: ['./component-granddaughter-b.component.scss']
})
export class ComponentGranddaughterBComponent implements OnInit {
	message!: string;
	constructor() { }

	ngOnInit(): void {
	}
	changeText($event: any) {

	}
}
