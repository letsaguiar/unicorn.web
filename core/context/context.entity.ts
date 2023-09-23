import { Router } from "../..";

export class Context {
	public query: Record<string, any> = {};
	public body: Record<string, any> = {};
	public header: Record<string, string> = {};
	public params: Record<string, any> = {};

	public static async build(request: Request, router: Router): Promise<Context>
	{
		const ctx = new Context();

		ctx.query = this.extractQuery(request);
		ctx.body = await this.extractBody(request); 
		ctx.header = this.extractHeader(request);
		ctx.params = this.extractParams(request, router);

		return (ctx);
	}

	private static extractQuery(request: Request): Record<string, any>
	{
		return (Object.fromEntries(new URL(request.url).searchParams));
	}

	private static async extractBody(request: Request): Promise<Record<string, any>>
	{
		if (request.body)
			return (request.json());
		return (new Object());
	}

	private static extractHeader(request: Request): Record<string, string>
	{
		return (Object.fromEntries(request.headers));
	}

	private static extractParams(request: Request, router: Router): Record<string, any>
	{
		const path = new URL(request.url).pathname;
		const keyRegex = new RegExp(
			router.path.replace(/\//g, '\\/').replace(/:\w+/g, ':(\\w+)'
		));

		const keys = keyRegex.exec(router.path) || [];
		const values = router.pathRegex.exec(path) || [];
		
		const params = {};
		for (let i = 1; i < keys?.length; i++)
			params[keys[i]] = values[i];
		
		return (params);
	}
}
