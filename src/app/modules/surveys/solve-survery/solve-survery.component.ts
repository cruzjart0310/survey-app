import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { UserAnswerDto } from '../models/user-answer-dto';
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
	questionArr: any = [];
	required = true;
	surveyData: any = [];
	surveyId!: number;
	totalStepsCount!: number;
	userAnswerData: UserAnswerDto = { user: { id: '', name: '' }, answer: [] };
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

		let item = {
			'questionId': questionId,
			'answerId': answerId
		};

		if (this.questionArr.length > 0) {
			let obj = this.questionArr.filter((elem: any, index: any) => {
				if (item.questionId == elem.questionId) {
					this.questionArr.splice(index, 1);
				}
			});
			console.log("Object deleted:" + JSON.stringify(obj));
		}

		this.questionArr[this.indexInArray] = item;
		console.log("Current values in Array:" + JSON.stringify(this.questionArr));
		this.indexInArray = this.indexInArray + 1;

		// if (this.userAnswerData.answer.length > 0) {
		// 	let obj = this.userAnswerData.answer.filter(function (elem: any, i: number, rep: any) {
		// 		let e = elem;
		// 		console.log(JSON.stringify(e))
		// 		// if (elem) {
		// 		// 	console.log('ok')
		// 		// }

		// 		// console.log('elem: ' + JSON.stringify(elem))
		// 		// console.log('i: ' + i)
		// 		// console.log('rep: ' + JSON.stringify(rep))
		// 		return i == rep.indexOf(elem);
		// 	});

		// 	// console.log(JSON.stringify(obj))
		// }

		// if (this.userAnswerData.answer.length > 0 && this.currentQuestionId == questionId) {
		// 	this.userAnswerData.answer.splice();
		// }

		this.userAnswerData.user.id = 'b5dbc387-eed6-42fb-b9d8-525094a171b0';
		this.userAnswerData.answer.push({ id: answerId, title: `answer-${answerId}` });
		this.isSelected = true;

		// console.log(answerId, questionId);
		// console.log(this.prueba);

		// if (this.userAnswerData.answer.length > 0) {
		// let value = this.userAnswerData.answer.filter();
		// if (value.length > 0) {
		// 	//removeEventListener(x)

		// }
		// }

		//push;

		// if (this.userAnswerData.answer.id.exist(answerId) in questionId) {
		// 	remove;
		// }

		// else {
		// 	push
		// };

		// this.userAnswerData.user.id = 'b5dbc387-eed6-42fb-b9d8-525094a171b0';
		// this.userAnswerData.answer.push({ id: event.value, title: `answer-${event.value}` });
		// this.isSelected = true;
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
