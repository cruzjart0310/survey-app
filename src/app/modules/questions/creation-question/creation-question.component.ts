import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { QuestionDto } from '../models/questionDto';
import { SurveyDto } from '../models/survey-dto';
// import { SurveyDto } from '../models/survey-dto';
import { QuestionService } from '../question.service';

@Component({
	selector: 'app-creation-question',
	templateUrl: './creation-question.component.html',
	styleUrls: ['./creation-question.component.scss']
})
export class CreationQuestionComponent implements OnInit {

	types: any[] = [];
	surveys: any[] = [];
	isSelected: boolean = false;
	isFileSelected: boolean = false;
	questionForm = new FormGroup({});
	questionData: QuestionDto = { Title: '', TypeId: 0, SurveyId: 0, Survey: { id: 0, name: '' } };

	filteredOptions!: Observable<any[]>;

	constructor(private service: QuestionService,
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<CreationQuestionComponent>) {

		this.questionForm = this.formBuilder.group({
			name: ['', { validators: [Validators.required] }],
			type: ['', { Validators: [Validators.required] }],
			survey: ['', { Validators: [Validators.required] }]
		});
	}

	ngOnInit(): void {
		this.getSurvey();
		this.filteredOptions = this.questionForm.controls['survey'].valueChanges
			.pipe(
				startWith<string | SurveyDto>(''),
				map(value => typeof value === 'string' ? value : value.name),
				map(title => title ? this._filter(title) : this.surveys.slice())
			);
	}

	addQuestion(question: QuestionDto): void {
		this.service.add(question)
			.subscribe({
				next: (response: any) => {
					this.dialogRef.close();
				},
				error: (error) => {
					console.error('error questions:' + JSON.parse(error));
				},
				complete: () => console.log('completed')
			});
	}

	uploadFile() {

	}

	getTypes(): void {
		if (this.types.length > 0) {
			return;
		}

		this.service.getType()
			.subscribe({
				next: (response: any) => {
					this.types = response;
				},
				error: (error) => {
					console.error('error :' + JSON.parse(error));
				},
				complete: () => console.log('completed')
			});
	}

	getSurvey(): void {
		this.service.getSurvey()
			.subscribe({
				next: (response: any) => {
					this.surveys = response.data
				},
				error: (error) => {
					console.error('error :' + JSON.parse(error));
				},
				complete: () => console.log('completed')
			});
	}

	displayFn(survey: SurveyDto): string {
		return survey ? survey.name : '';
	}

	_filter(title: string) {
		const filterValue = title.toLowerCase();
		return this.surveys.filter(option =>
			option.name.toLowerCase().indexOf(filterValue) !== -1);
	}

	//Events
	onSubmit(): void {
		let question = this.questionForm.value;
		this.addQuestion(question);
	}

	onClose(): void {
		this.dialogRef.close();
	}

	onSave(): void {
		let values = this.questionForm.value;
		this.questionData.Title = values.name;
		this.questionData.TypeId = values.type;
		this.addQuestion(this.questionData);
	}

	onSelected(event: MatAutocompleteSelectedEvent) {
		this.isSelected = true;
		this.questionData.SurveyId = event.option.value.id;
		this.questionData.Survey.name = event.option.value.name;
	}

	onChange(event: any) {
		console.log(event)
	}

	onSelect(event: any) {
		if (event.checked) {
			this.isFileSelected = true;
		} else {
			this.isFileSelected = false;
		}
		console.log("event checkbox: ");
	}
}
