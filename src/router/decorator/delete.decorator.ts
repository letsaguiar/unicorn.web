import 'reflect-metadata'
import { RouterMethod } from '../router.enum';
import { ResponseStatus } from '../../response/response.enum';

export function Delete(path?: string)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:path", path, target, propertyKey);
		Reflect.defineMetadata("router:method", RouterMethod.DELETE, target, propertyKey);
		Reflect.defineMetadata("router:success-status", ResponseStatus.NO_CONTENT, target, propertyKey);
	}
}
