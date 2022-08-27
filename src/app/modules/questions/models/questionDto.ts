
export interface QuestionDto {
	Id?: number;
	Title: string;
	TypeId: number;
	Type?: object;
	SurveyId: number;
	Survey: Survey,
	Answers?: [],
}

export interface Type {
	Id?: number;
	Title: string;
}

export interface Survey {
	id?: number;
	name?: string;
}

