import { Pipe, PipeTransform } from '@angular/core';
import { UserPointsDto } from '../models/user-points-dto';

@Pipe({
	name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
	transform(value: UserPointsDto, ...args: unknown[]): string {
		return `${value.user.firstName} ${value.user.lastName}`;
	}
}
