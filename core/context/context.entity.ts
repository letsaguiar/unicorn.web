export class Context {
	public query: Record<string, any> = {};
	public body: Record<string, any> = {};
	public header: Record<string, string> = {};

	public static async build(request: Request): Promise<Context>
	{
		const ctx = new Context();

		ctx.query = this.extractQuery(request);
		ctx.body = await this.extractBody(request); 
		ctx.header = this.extractHeader(request);

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
}
