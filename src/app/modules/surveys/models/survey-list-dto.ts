export interface SurveyListDto {
	pageNumber: number;
	pageSize: number;
	firstPage: string;
	lastPage: string;
	totalPages: number;
	totalRecords: number;
	nextPage?: any;
	previousPage?: any;
	data: Survey[];
	succeeded: boolean;
	errors?: any;
	message?: any;
}

export interface Survey {
	id: number;
	name: string;
	questions?: any;
	createdAt: Date;
}


