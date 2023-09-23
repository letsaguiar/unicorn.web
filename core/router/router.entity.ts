import { HttpMethod } from "../http/http.enum";
import { RouterHandler } from "./router.interface";

export class Router {
	public path: string;
	public pathRegex: RegExp;

	public method: HttpMethod;

	public handler: RouterHandler;

	constructor(path: string, method: HttpMethod, handler: RouterHandler)
	{
		this.path = path;
		this.pathRegex = this.buildPathRegex(path);
		this.method = method;
		this.handler = handler;
	}

	private buildPathRegex(path: string): RegExp
	{
		if (path.length === 0)
			return (new RegExp('.*'));

		const pattern = path.replace(/\//g, '\\/').replace(/:\w+/g, '(\\w+)');
		return (new RegExp(`^${pattern}$`));
	}

	public match(request: Request): boolean
	{
		const path = new URL(request.url).pathname;
		const method = request.method;

		return (
			this.pathRegex.test(path)
			&& (method == this.method || this.method == HttpMethod.ALL)
		);
	}
}
