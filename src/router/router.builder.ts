import { Router, RouterHandler } from "./router.interface";
import { RouterMethod } from "./router.enum";

export class RouterBuilder {
	private router: Router;

	public constructor()
	{
		this.router = {
			path: '/',
			method: RouterMethod.GET,
			handler: () => new Response('')
		}
	}

	public setPath(path: string): this
	{
		this.router.path = path;
		return this;
	}

	public setMethod(method: RouterMethod): this
	{
		this.router.method = method;
		return this;
	}

	public setHandler(handler: RouterHandler): this
	{
		this.router.handler = handler;
		return this;
	}

	public build(): Router
	{
		return this.router;
	}
}
