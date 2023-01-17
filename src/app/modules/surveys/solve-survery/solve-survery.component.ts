import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { Answer, UserAnswerDto } from '../models/user-answer-dto';
import { SurveyService } from '../survey.service';
import { UserAnswerService } from '../user-answer.service';
import { FullNamePipe } from '../pipes/full-name.pipe';

@Component({
	selector: 'app-solve-survery',
	templateUrl: './solve-survery.component.html',
	styleUrls: ['./solve-survery.component.scss']
})
export class SolveSurveryComponent implements AfterViewInit, OnInit {

	prueba: any;
	currentQuestionId!: number;
	completed: boolean = false;
	disabled: boolean = true;
	firstFormGroup!: FormGroup;
	isLinear: boolean = false;
	isEditable: boolean = false;
	isSelected: boolean = false;
	index: number = 0;
	indexInArray: number = 0;
	message: string = "";
	userData: any = {};
	answersList: Answer[] = [{ id: 1, title: '', questionId: 1 }];
	required = true;
	surveyData: any = [];
	surveyId!: number;
	totalStepsCount!: number;
	userAnswerData: UserAnswerDto = { user: { id: '', name: '' }, answer: [{ id: 1, title: '', questionId: 1 }] };
	@ViewChild('stepper') stepper!: MatStepper;

	constructor(
		private activatedRouter: ActivatedRoute,
		private service: SurveyService,
		private serviceUser: UserAnswerService) {
	}

	ngOnInit() {
		this.activatedRouter.params.subscribe(params => {
			this.surveyId = params['id'];

			this.service.getById(this.surveyId)
				.subscribe({
					next: (response) => {
						this.surveyData = response.data;
					},
				});
		});
	}

	ngAfterViewInit() {
		this.totalStepsCount = this.stepper._steps.length;
	}

	selectOption(questionId: number, answerId: number) {
		let item: Answer = {
			id: answerId,
			title: "title",
			questionId: questionId
		};

		if (this.answersList.length) {
			this.answersList.filter((elem: any, index: any) => {
				if (questionId == elem.questionId) {
					this.answersList.splice(index, 1);
				}
			});
		}

		this.answersList.push(item);
		this.userAnswerData.user.id = 'b5dbc387-eed6-42fb-b9d8-525094a171b0';
		this.userAnswerData.answer = this.answersList;
		this.isSelected = true;
	}

	sendAnswer(event: any) {
		this.serviceUser.add(this.userAnswerData)
			.subscribe({
				next: (response) => {
					this.disabled = false;
				},
				error: (error: any) => {
					console.error("error survey: " + JSON.stringify(error));
				},
				complete: () => {

					this.serviceUser.getPoints("b5dbc387-eed6-42fb-b9d8-525094a171b0", this.surveyId)
						.subscribe({
							next: (response) => {
								this.completed = true;
								console.log(response)

								this.userData = response;
							},
							error: (error: any) => {
								console.error("error survey: " + JSON.stringify(error));
							},
							complete: () => {
								console.log('completed')
							}
						});
				}
			});
	}

	move(index: number) {
		if (!this.isSelected) {
			return
		}

		this.index = index + 1;
		this.stepper.selectedIndex = this.index;
		this.isSelected = false;
	}
}
