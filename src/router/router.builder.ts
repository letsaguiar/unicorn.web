import { Router, RouterHandler } from "./router.entity";
import { RouterMethod, RouterParam } from "./router.enum";
import { ResponseBuilder } from "../response/response.builder";
import { ResponseStatus } from "../response/response.enum";

export class RouterBuilder {
	private router: Router;

	public constructor()
	{
		this.router = new Router();
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

	public setSuccessStatus(status: ResponseStatus): this
	{
		this.router.successStatus = status;
		return this;
	}

	public setParams(params: RouterParam[]): this
	{
		this.router.params = params;
		return this;
	}

	public build(): Router
	{
		return this.router;
	}
}
