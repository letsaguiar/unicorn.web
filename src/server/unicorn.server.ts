import { Controller } from "../controller/controller.interface";
import { NotFoundRouter } from "../router/default/not-fount.router";
import { Router } from "../router/router.interface";

export class UnicornServer {
	public Routers: Router[];

	public constructor(controllers: Controller[])
	{
		this.Routers = [];

		this.loadRouters(controllers);
	}

	private loadRouters(controllers: Controller[]): void
	{
		for (const controller of controllers)
		{
			const instance = new (controller as any)();
			instance.loadRouters();
			this.Routers.push(...instance.routers);
		}
	}

	public serve(port: number): void
	{
		const routers = this.Routers;
		Bun.serve({
			port,
			fetch(req: Request)
			{
				const url = new URL(req.url);
				for (const router of routers)
				{
					if (url.pathname == router.path && req.method == router.method)
						return router.handler(req);
				}
				return NotFoundRouter.handler(req);
			}
		})
	}

}
