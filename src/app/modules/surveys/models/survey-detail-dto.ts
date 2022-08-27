export interface SurveyDetailDto {
	data: Survey;
}

export interface Survey {
	id: number;
	name: string;
	questions?: Question;
	createdAt?: Date;
}

export interface Question {
	id: number;
	title: string;
	type: Type;
	answers: Answer[];
}

export interface Type {
	id: number;
	name: string;
	questions?: Question;
	createdAt: Date;
}

export interface Answer {
	id: number;
	title: string;
	point: number;
	question?: any;
}



