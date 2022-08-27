import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AnswerService } from '../answer.service';
import { AnswerDto } from '../models/answer-dto';
import { QuestionDto } from '../models/question-dto';

@Component({
	selector: 'app-creation-answer',
	templateUrl: './creation-answer.component.html',
	styleUrls: ['./creation-answer.component.scss']
})
export class CreationAnswerComponent implements OnInit, OnDestroy {
	private suscriptions = new Subscription();
	isSelected: boolean = false;
	answerForm = new FormGroup({});
	answerData: AnswerDto = { Title: '', QuestionId: 0, Question: { Id: 0, Title: '' } };

	questions: QuestionDto[] = [];
	filteredOptions!: Observable<any[]>;

	constructor(private route: Router,
		private service: AnswerService,
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<CreationAnswerComponent>) {

		this.answerForm = this.formBuilder.group({
			name: ['', { validators: [Validators.required] }],
			question: ['', { Validators: [Validators.required] }],
		});
	}

	ngOnInit(): void {
		this.getQuestions();
		this.filteredOptions = this.answerForm.controls['question'].valueChanges
			.pipe(
				startWith<string | QuestionDto>(''),
				map(value => typeof value === 'string' ? value : value.title),
				map(title => title ? this._filter(title) : this.questions.slice())
			);
	}

	addQuestion(question: AnswerDto): void {
		this.suscriptions.add(this.service.add(question)
			.subscribe({
				next: (response: any) => {
					this.dialogRef.close();
				},
				error: (error) => {
					console.error('error questions:' + JSON.parse(error));
				},
				complete: () => console.log('completed')
			})
		);
	}

	getQuestions(): void {
		this.service.getQuestion()
			.subscribe({
				next: (response: any) => {
					this.questions = response.data;
				},
				error: (error) => {
					console.error('error :' + JSON.parse(error));
				},
				complete: () => console.log('completed')
			});
	}

	displayFn(question: QuestionDto): string {
		return question ? question.title : '';
	}

	_filter(title: string) {
		const filterValue = title.toLowerCase();
		return this.questions.filter(option =>
			option.title.toLowerCase().indexOf(filterValue) !== -1);
	}

	//Events
	onClose() {
		this.dialogRef.close();
	}

	onSave() {
		let values = this.answerForm.value;
		this.answerData.Title = values.name;
		this.addQuestion(this.answerData);
	}

	onSelected(event: MatAutocompleteSelectedEvent) {
		this.isSelected = true;
		this.answerData.QuestionId = event.option.value.id;
		this.answerData.Question.Title = event.option.value.title;
	}

	ngOnDestroy(): void {
		this.suscriptions.unsubscribe();
	}
}
