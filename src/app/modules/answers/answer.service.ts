import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnswerDto } from './models/answer-dto';
import { PaginationDto } from './models/pagination-dto';
import { QuestionDto } from './models/question-dto';

@Injectable({
	providedIn: 'root'
})
export class AnswerService {

	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	public get(paginationDto: PaginationDto): Observable<AnswerDto[]> {
		let url = `${this.apiUrl + '/answer'}?PageNumber=${paginationDto.pageNumber}&PageSize=${paginationDto.pageSize}`;

		return this.http.get<AnswerDto[]>(url);
	}

	public getById(id: number): Observable<AnswerDto> {
		return this.http.get<AnswerDto>(`${this.apiUrl + '/answer'}/${id}`);
	}

	public add(question: AnswerDto): Observable<AnswerDto | AnswerDto[]> {
		let url = this.apiUrl + '/answer';
		return this.http.post<AnswerDto>(url, question);
	}

	public edit(id: number, question: AnswerDto): Observable<AnswerDto> {
		return this.http.put<AnswerDto>(`${this.apiUrl + '/answer'}/${id}`, question);
	}

	public delete(id: number): Observable<AnswerDto> {
		return this.http.delete<AnswerDto>(`${this.apiUrl + '/answer'}/${id}`);
	}

	public getQuestion(): Observable<QuestionDto[]> {
		let url = this.apiUrl + '/question';
		return this.http.get<QuestionDto[]>(url);
	}
}
