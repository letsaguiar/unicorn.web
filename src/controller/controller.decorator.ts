import "reflect-metadata";
import { Router, RouterHandler } from "../router/router.entity";
import { RouterBuilder } from "../router/router.builder";

export function Controller(path?: string)
{
	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
  		return class extends constructor {
    		public path = path;
			public routers: Router[] = [];

			public getRouters(controller: object)
			{
				const keys = Reflect.ownKeys(controller);
				return keys.filter((key) => {
					return Reflect.hasMetadata("router:path", controller, key);
				});
			}

			public loadRouters()
			{
				const base_controller = Reflect.getPrototypeOf(this) as object;
				const controller = Reflect.getPrototypeOf(base_controller) as object;
				const routers = this.getRouters(controller) as (keyof this)[];

				for (const router of routers)
				{
					const path = Reflect.getMetadata("router:path", controller, router as string);
					const method = Reflect.getMetadata("router:method", controller, router as string);
					const status = Reflect.getMetadata("router:success-status", controller, router as string);
					const params = Reflect.getMetadata("router:params", controller, router as string); 
					const handler = this[router] as RouterHandler;
					
					this.routers.push(
						new RouterBuilder()
							.setPath(path)
							.setMethod(method)
							.setHandler(handler)
							.setSuccessStatus(status)
							.setParams(params)
							.build()
					);
				}
			}
  		};
	}
}
