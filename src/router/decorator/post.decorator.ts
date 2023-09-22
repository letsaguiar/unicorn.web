import 'reflect-metadata'
import { RouterMethod } from '../router.enum';

export function Post(path?: string)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:path", path, target, propertyKey);
		Reflect.defineMetadata("router:method", RouterMethod.POST, target, propertyKey);
	}
}
