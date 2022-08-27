import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAnswerDto } from './models/user-answer-dto';
import { UserPointsDto } from './models/user-points-dto';

@Injectable({
	providedIn: 'root'
})
export class UserAnswerService {
	private apiUrl = environment.apiUrl + '/UserAnswers';

	constructor(private http: HttpClient) {

	}

	public add(userAnswer: UserAnswerDto): Observable<UserAnswerDto | UserAnswerDto[]> {
		const url = `${this.apiUrl}/${userAnswer.user.id}/answer`;
		return this.http.post<UserAnswerDto>(url, userAnswer);
	}

	public getPoints(userId: string, surveyId: number): Observable<UserPointsDto> {
		const url = `${this.apiUrl}/${userId}/survey/${surveyId}`;
		return this.http.get<UserPointsDto>(url);
	}
}
