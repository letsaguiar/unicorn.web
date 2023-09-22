import 'reflect-metadata'
import { RouterMethod } from '../router.enum';
import { ResponseStatus } from '../../response/response.enum';

export function Put(path?: string)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:path", path, target, propertyKey);
		Reflect.defineMetadata("router:method", RouterMethod.PUT, target, propertyKey);
		Reflect.defineMetadata("router:success-status", ResponseStatus.NO_CONTENT, target, propertyKey);
	}
}
