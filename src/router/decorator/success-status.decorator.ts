import 'reflect-metadata'
import { ResponseStatus } from '../../response/response.enum';

export function SuccessStatus(status: ResponseStatus)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:success-status", status, target, propertyKey);
	}
}
