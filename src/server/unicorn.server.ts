import { Router } from "../router/router.interface";

export class UnicornServer {
	public Routers: Router[];

	public constructor(routers: Router[])
	{
		this.Routers = routers;
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
				return new Response('bun!');
			}
		})
	}

}
