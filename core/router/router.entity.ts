import { HttpMethod } from "../http/http.enum";
import { RouterHandler } from "./router.interface";

export class Router {
	public path: string;
	public method: HttpMethod;
	public handler: RouterHandler;

	constructor(path: string, method: HttpMethod, handler: RouterHandler)
	{
		this.path = path;
		this.method = method;
		this.handler = handler;
	}

	public match(request: Request): boolean
	{
		const path = new URL(request.url).pathname;
		const method = request.method;

		return (path == this.path && method == this.method);
	}
}
