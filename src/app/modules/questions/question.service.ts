import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationDto } from './models/pagination-dto';
import { QuestionDto } from './models/questionDto';
import { SurveyDto } from './models/survey-dto';
import { TypeDto } from './models/type-dto';


@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	public get(paginationDto: PaginationDto): Observable<QuestionDto[]> {

		let url = `${this.apiUrl + '/question'}?PageNumber=${paginationDto.pageNumber}&PageSize=${paginationDto.pageSize}`;
		return this.http.get<QuestionDto[]>(url);
	}

	public getById(id: number): Observable<QuestionDto> {
		return this.http.get<QuestionDto>(`${this.apiUrl + '/question'}/${id}`);
	}

	public add(question: QuestionDto): Observable<QuestionDto | QuestionDto[]> {
		debugger
		let url = this.apiUrl + '/question';
		return this.http.post<QuestionDto>(url, question);
	}

	public uploadFile() {
		debugger
		let url = this.apiUrl + '/question';
		return;
	}

	public edit(id: number, question: QuestionDto): Observable<QuestionDto> {
		return this.http.put<QuestionDto>(`${this.apiUrl + '/question'}/${id}`, question);
	}

	public delete(id: number): Observable<QuestionDto> {
		return this.http.delete<QuestionDto>(`${this.apiUrl + '/question'}/${id}`);
	}

	public getType(): Observable<TypeDto[]> {
		return this.http.get<TypeDto[]>(this.apiUrl + '/questionType');
	}

	public getSurvey(): Observable<SurveyDto[]> {
		return this.http.get<SurveyDto[]>(this.apiUrl + '/survey');
	}
}
