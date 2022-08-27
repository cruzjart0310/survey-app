import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

interface Node {
	name: string;
	points: number;
	children?: any[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

@Component({
	selector: 'app-details-survey',
	templateUrl: './details-survey.component.html',
	styleUrls: ['./details-survey.component.scss']
})
export class DetailsSurveyComponent implements OnInit {
	surveyData: any;
	questionData: Node[] = [];


	private _transformer = (node: Node, level: number) => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			level: level,
		};
	};

	treeControl = new FlatTreeControl<ExampleFlatNode>(
		node => node.level,
		node => node.expandable,
	);

	treeFlattener = new MatTreeFlattener(
		this._transformer,
		node => node.level,
		node => node.expandable,
		node => node.children,
	);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	constructor(private service: SurveyService,
		private activatedRouter: ActivatedRoute) {

	}

	ngOnInit(): void {
		this.activatedRouter.params.subscribe(params => {
			let id: number = params['id'];
			this.getSurveyById(id);
		});
	}

	getSurveyById(id: number) {
		this.service.getById(id)
			.subscribe({
				next: (response) => {
					this.surveyData = response;
					let questions = this.surveyData.data.questions;

					for (var i = 0; i < questions.length; i++) {
						// if (questions[i].answers.length > 0) {
						this.questionData.push({ name: questions[i].title, points: 0, children: [] });

						// }
						let answers = this.surveyData.data.questions[i].answers;
						for (var j = 0; j < answers.length; j++) {
							let itemAnswer = { name: answers[j].title, points: answers[j].point, children: [] }
							this.questionData[i].children?.push(itemAnswer);
						}
					}
					this.dataSource.data = this.questionData;
				},
			});
	}

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
