export interface AnswerDto {
	Id?: number;
	Title: string;
	QuestionId: number;
	Question: Question;
}

export interface Question {
	Id: number;
	Title: string;
}
