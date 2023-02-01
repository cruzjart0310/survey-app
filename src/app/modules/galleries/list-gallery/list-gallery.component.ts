import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-gallery',
	templateUrl: './list-gallery.component.html',
	styleUrls: ['./list-gallery.component.scss']
})
export class ListGalleryComponent implements OnInit {
	@Input()
	series: any = [];
	points!: number;

	constructor() { }

	ngOnInit(): void {

	}

	handleRated(vote: number) {
		this.points = vote;
	}
}
