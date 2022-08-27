import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCreationComponent } from '../dialog-creation/dialog-creation.component';
import { Survey } from '../models/survey-detail-dto';
import { SurveyDto } from '../models/survey-dto';
import { SurveyService } from '../survey.service';

@Component({
	selector: 'app-edit-survey',
	templateUrl: './edit-survey.component.html',
	styleUrls: ['./edit-survey.component.scss']
})
export class EditSurveyComponent implements OnInit {
	surveyForm = new FormGroup({});

	surveyData: SurveyDto = { id: 0, name: '' };

	constructor(
		private service: SurveyService,
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<DialogCreationComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Survey,) {

		this.surveyForm = this.formBuilder.group({
			name: ['', { validators: [Validators.required] }]
		});
	}

	ngOnInit(): void {
		this.surveyForm.setValue({ name: this.data.name });
	}

	editSurvey(id: number, surveyDto: SurveyDto) {
		this.service.edit(id, surveyDto)
			.subscribe({
				next: (response: any) => {
					console.log(response);
					this.dialogRef.close();
				},
				error: (error: any) => {
					console.log(error);
				},
				complete: () => console.log('completed')
			});
	}

	//Events
	onClose() {
		this.dialogRef.close();
	}

	onSave() {
		let survey = this.surveyForm.value;
		this.surveyData.id = this.data.id;
		this.surveyData.name = survey.name;
		this.editSurvey(this.surveyData.id, this.surveyData);
	}

	onSubmit() {
		let survey = this.surveyForm.value;
		this.editSurvey(survey.id, survey);
	}
}
