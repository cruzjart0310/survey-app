import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
	@Input()
	maxRating: number = 5;

	@Input()
	ratingSelected: number = 0;

	@Output()
	rated: EventEmitter<number> = new EventEmitter<number>();


	beforeRating: number = 0;
	maxRatingArray: any = [];
	voted: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.maxRatingArray = Array(this.maxRating).fill(0)
	}

	handleMouseEnter(index: number) {
		this.ratingSelected = index + 1;
	}

	handleMouseLeave(index: number) {
		if (this.beforeRating !== 0)
			this.ratingSelected = this.beforeRating;
		else
			this.ratingSelected = 0;
	}

	rate(index: number) {
		this.ratingSelected = index + 1;
		this.voted = true;
		this.beforeRating = this.ratingSelected;
		this.rated.emit(this.ratingSelected);
	}

}
