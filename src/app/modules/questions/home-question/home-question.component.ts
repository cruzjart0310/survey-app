import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreationQuestionComponent } from '../creation-question/creation-question.component';
import { PaginationDto } from '../models/pagination-dto';
import { QuestionService } from '../question.service';
import * as moment from 'moment';

@Component({
	selector: 'app-home-question',
	templateUrl: './home-question.component.html',
	styleUrls: ['./home-question.component.scss']
})
export class HomeQuestionComponent implements OnInit {
	moment = moment();
	questionData: any = [];
	columnsToShow = ['Id', 'Title', 'CreatedAt', 'Type', 'Assigment', 'Actions'];

	totalRegisters: number = 0;
	currentPage: number = 1;
	recordBypage: number = 10;

	paginationData: PaginationDto = { pageNumber: this.currentPage, pageSize: this.recordBypage }

	constructor(private service: QuestionService,
		private dialog: MatDialog) { }

	ngOnInit(): void {
		this.getQuestions(this.paginationData);
	}

	getQuestions(paginationDto: PaginationDto) {
		this.service.get(paginationDto)
			.subscribe({
				next: (response: any) => {
					this.questionData = response.data;
					this.totalRegisters = response.totalRecords;
				},
				error: (error) => {
					console.log("error" + JSON.stringify(error))
				},
				complete: () => console.log("completed")
			});
	}

	openDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '30vw'; //sets width of dialog
		dialogConfig.height = '60vh'; //sets width of dialog
		dialogConfig.disableClose = true;

		const dialogRef = this.dialog.open(CreationQuestionComponent, dialogConfig);
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
