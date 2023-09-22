import 'reflect-metadata'
import { RouterParam } from '../router.enum';

export function Param()
{
	return function (target: any, propertyKey: string, parameterIndex: number)
	{
		const params: RouterParam[] = Reflect.getMetadata("router:params", target, propertyKey) || [];
		params.push(RouterParam.PARAM);
		Reflect.defineMetadata("router:params", params, target, propertyKey);
	}
}
