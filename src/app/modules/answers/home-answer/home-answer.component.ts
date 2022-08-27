import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AnswerService } from '../answer.service';
import { CreationAnswerComponent } from '../creation-answer/creation-answer.component';
import { PaginationDto } from '../models/pagination-dto';
import * as moment from 'moment';

@Component({
	selector: 'app-home-answer',
	templateUrl: './home-answer.component.html',
	styleUrls: ['./home-answer.component.scss']
})
export class HomeAnswerComponent implements OnInit {
	moment = moment();
	answerData: any = [];
	columnsToShow = ['Id', 'Title', 'CreatedAt', 'Assigment', 'Actions'];
	dataSource: MatTableDataSource<any> = new MatTableDataSource();

	currentPage: number = 1;
	totalRegisters: number = 0;
	recordBypage: number = 10;

	paginationData: PaginationDto = { pageNumber: this.currentPage, pageSize: this.recordBypage }

	constructor(private service: AnswerService,
		private dialog: MatDialog) { }

	ngOnInit(): void {
		this.getQuestions(this.paginationData);
	}

	getQuestions(paginationDto: PaginationDto) {
		this.service.get(paginationDto)
			.subscribe({
				next: (response: any) => {
					console.log(response);
					this.answerData = response.data;
					this.totalRegisters = response.totalRecords;
				},
				error: () => {

				},
				complete: () => console.log("completed")
			});
	}

	openDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '30vw'; //sets width of dialog
		dialogConfig.height = '50vh'; //sets width of dialog
		dialogConfig.disableClose = true;

		const dialogRef = this.dialog.open(CreationAnswerComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
			this.getQuestions(this.paginationData);
			console.log(`Dialog result: ${result}`);
		});
	}

	setDateMoment(createAt: string): string {
		return moment(createAt).fromNow();
	}

	//Events
	updatePagination(datos: PageEvent): void {
		this.paginationData.pageNumber = datos.pageIndex + 1;
		this.paginationData.pageSize = datos.pageSize;
		this.getQuestions(this.paginationData);
	}
}
