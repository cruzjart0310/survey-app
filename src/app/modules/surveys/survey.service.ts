import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationDto } from './models/pagination-dto';
import { SurveyDetailDto } from './models/survey-detail-dto';
import { SurveyDto } from './models/survey-dto';
import { SurveyListDto } from './models/survey-list-dto';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    private apiUrl = environment.apiUrl + '/survey';

    constructor(private http: HttpClient) {

    }

    public get(paginationDto: PaginationDto): Observable<SurveyListDto> {
        let params = new HttpParams;
        return this.http.get<SurveyListDto>(`${this.apiUrl}?PageNumber=${paginationDto.pageNumber}&PageSize=${paginationDto.pageSize}`, { params });
    }

    public getById(id: number): Observable<SurveyDetailDto> {
        return this.http.get<SurveyDetailDto>(`${this.apiUrl}/${id}`);
    }

    public add(survey: SurveyDto): Observable<SurveyDto | SurveyDto[]> {
        return this.http.post<SurveyDto>(this.apiUrl, survey);
    }

    public edit(id: number, survey: SurveyDto): Observable<SurveyDto> {
        return this.http.put<SurveyDto>(`${this.apiUrl}/${id}`, survey);
    }

    public delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
