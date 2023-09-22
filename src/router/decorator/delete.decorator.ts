import 'reflect-metadata'
import { RouterMethod } from '../router.enum';

export function Delete(path?: string)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:path", path, target, propertyKey);
		Reflect.defineMetadata("router:method", RouterMethod.DELETE, target, propertyKey);
	}
}
