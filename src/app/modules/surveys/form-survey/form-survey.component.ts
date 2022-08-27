import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-survey',
	templateUrl: './form-survey.component.html',
	styleUrls: ['./form-survey.component.scss']
})
export class FormSurveyComponent implements OnInit {

	form = new FormGroup({});

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			name: ['', {
				validators: [Validators.required]
			}]
		});
	}

	//events
	onSubmit() {

	}

}
