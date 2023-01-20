import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-component-granddaughter-a',
	templateUrl: './component-granddaughter-a.component.html',
	styleUrls: ['./component-granddaughter-a.component.scss']
})
export class ComponentGranddaughterAComponent implements OnInit {
	message!: string;
	constructor() { }

	ngOnInit(): void {
	}

	changeText($event: any) {

	}

}
