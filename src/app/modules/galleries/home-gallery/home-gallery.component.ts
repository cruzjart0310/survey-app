import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-gallery',
	templateUrl: './home-gallery.component.html',
	styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {
	seriesAuthorize: any = [];
	seriesNoAuthorize: any = [];

	constructor() { }

	ngOnInit(): void {
		this.seriesAuthorize = [
			{
				id: "1",
				title: "Serie 1",
				url: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "2",
				title: "Serie 2",
				url: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "3",
				title: "Serie 3",
				url: "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "4",
				title: "Serie 4",
				url: "https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "5",
				title: "Serie 1",
				url: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "6",
				title: "Serie 2",
				url: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "7",
				title: "Serie 3",
				url: "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "8",
				title: "Serie 4",
				url: "https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
		];

		this.seriesNoAuthorize = [
			{
				id: "1",
				title: "Serie no Authorize 1",
				url: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "2",
				title: "Serie no Authorize 2",
				url: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "3",
				title: "Serie no Authorize 3",
				url: "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "4",
				title: "Serie no Authorize 4",
				url: "https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "5",
				title: "Serie 1",
				url: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				id: "6",
				title: "Serie 2",
				url: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "7",
				title: "Serie 3",
				url: "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
			,
			{
				id: "8",
				title: "Serie 4",
				url: "https://m.media-amazon.com/images/M/MV5BMjEwOTkyOTI3M15BMl5BanBnXkFtZTcwNTQxMjU1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			}
		];
	}

}
