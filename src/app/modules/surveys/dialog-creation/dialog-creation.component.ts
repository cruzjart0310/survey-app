import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SurveyDto } from '../models/survey-dto';
import { SurveyService } from '../survey.service';

@Component({
	selector: 'app-dialog-creation',
	templateUrl: './dialog-creation.component.html',
	styleUrls: ['./dialog-creation.component.scss']
})
export class DialogCreationComponent implements OnInit {

	surveyForm = new FormGroup({});

	constructor(
		private route: Router,
		private snackBar: MatSnackBar,
		private service: SurveyService,
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<DialogCreationComponent>) { }

	ngOnInit(): void {
		this.surveyForm = this.formBuilder.group({
			name: ['', { validators: [Validators.required] }]
		});
	}

	addSurvey(survey: SurveyDto) {
		this.service.add(survey)
			.subscribe({
				next: (response: any) => {
					console.log(response);
					this.dialogRef.close();
					this.snackBar.open("Survey add succesfully", "", { duration: 3000 })
				},
				error: (error: any) => {
					console.log(error);
				},
				complete: () => console.log('completed')
			});
	}

	onClose() {
		this.dialogRef.close();
	}

	onSave() {
		let survey = this.surveyForm.value;
		this.addSurvey(survey);
	}

	onSubmit() {
		let survey = this.surveyForm.value;
		this.addSurvey(survey);
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action);
	}
}
