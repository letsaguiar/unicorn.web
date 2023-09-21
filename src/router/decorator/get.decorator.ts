import 'reflect-metadata'

export function Get(path?: string)
{
	return function (target: any, propertyKey: string)
	{
		Reflect.defineMetadata("router:path", path, target, propertyKey);
	}
}
