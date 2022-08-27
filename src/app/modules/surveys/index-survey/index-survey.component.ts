import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { Survey } from '../models/survey';
import { DialogCreationComponent } from '../dialog-creation/dialog-creation.component';
import { SurveyService } from '../survey.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { PaginationDto } from '../models/pagination-dto';
import * as moment from 'moment';
import { EditSurveyComponent } from '../edit-survey/edit-survey.component';
import { SurveyDto } from '../models/survey-dto';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
	selector: 'app-index-survey',
	templateUrl: './index-survey.component.html',
	styleUrls: ['./index-survey.component.scss']
})
export class IndexSurveyComponent implements OnInit {
	moment = moment();

	totalRegisters: number = 0;
	currentPage: number = 1;
	recordBypage: number = 10;

	surveyData: any = [];
	dataSource: MatTableDataSource<any> = new MatTableDataSource();
	colunmsToShow = ['Id', 'Name', 'CreatedAt', 'Actions'];
	paginationData: PaginationDto = { pageNumber: this.currentPage, pageSize: this.recordBypage };

	@Input() model!: SurveyDto;

	constructor(
		private service: SurveyService,
		private dialog: MatDialog,
		private snackBar: MatSnackBar,) { }

	ngOnInit(): void {
		this.getSurveys(this.paginationData);
	}

	getSurveys(paginationDto: PaginationDto) {
		this.service.get(paginationDto)
			.subscribe(
				{
					next: (response: any) => {
						this.surveyData = response.data;
						this.totalRegisters = response.totalRecords;

						let date = moment(this.surveyData[0].CreatedAt);
					},
					error: (error: any) => {
						this.openSnackBar(error.statusText, "close")
						console.error("error survey: " + JSON.stringify(error));
					},
					complete: () => console.log('completed')
				}
			);
	}

	getSurveyById(id: number) {
		this.service.getById(id)
			.subscribe(
				{
					next: (response: any) => {
						this.getSurveys(this.paginationData);
					},
					error: (error: any) => {
						console.error("error delete survey by id: " + JSON.stringify(error));
					},
					complete: () => console.log('completed')
				}
			);
	}

	deleteSurvey(id: number) {
		this.service.delete(id)
			.subscribe(
				{
					next: (response: any) => {
						this.getSurveys(this.paginationData);
					},
					error: (error: any) => {
						console.error("error survey by id: " + JSON.stringify(error));
					},
					complete: () => console.log('completed')
				}
			);
	}

	updatePagination(datos: PageEvent): void {
		this.paginationData.pageNumber = datos.pageIndex + 1;
		this.paginationData.pageSize = datos.pageSize;
		this.getSurveys(this.paginationData);
	}

	openDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '30vw'; //sets width of dialog
		dialogConfig.height = '30vh'; //sets width of dialog
		dialogConfig.disableClose = true;

		const dialogRef = this.dialog.open(DialogCreationComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
			this.getSurveys(this.paginationData);
			console.log(`Dialog result: ${result}`);
		});
	}

	openDialogEdit(element: any, event: any) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = '30vw'; //sets width of dialog
		dialogConfig.height = '30vh'; //sets width of dialog
		dialogConfig.disableClose = true;

		dialogConfig.data = {
			id: element.id,
			name: element.name
		}

		const dialogRef = this.dialog.open(EditSurveyComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(result => {
			this.getSurveys(this.paginationData);
			console.log(`Dialog result: ${result}`);
		});
	}

	setDateMoment(createAt: string): string {
		return moment(createAt).fromNow();
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action);
	}
}
