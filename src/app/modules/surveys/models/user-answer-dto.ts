export interface UserAnswerDto {
	user: User;
	answer: Answer[];
}

export interface User {
	id: string;
	name: string;
}

export interface Answer {
	id: number;
	title: string;
	questionId: number;
}
