export interface UserAnswerDto {
	user: User;
	answer: any
}

export interface User {
	id: string;
	name: string;
}

export interface Answer {
	id: number;
	title: string;
}
