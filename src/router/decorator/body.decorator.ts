import 'reflect-metadata'
import { RouterParam } from '../router.enum';

export function Body()
{
	return function (target: any, propertyKey: string, parameterIndex: number)
	{
		const params: RouterParam[] = Reflect.getMetadata("router:params", target, propertyKey) || [];
		params.push(RouterParam.BODY);
		Reflect.defineMetadata("router:params", params, target, propertyKey);
	}
}
