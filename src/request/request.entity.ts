export class UnicornRequest {

	public url?: string;

	public query?: Record<string, string>

	public body?: Record<string, string>

	public header?: Record<string, string>

	public static async build(req: Request): Promise<UnicornRequest>
	{
		const request = new UnicornRequest();
		request.url = this.extractUrl(req);
		request.query = this.extractQuery(req);
		request.body = await this.extractBody(req);
		request.header = this.extractHeader(req);

		return request;
	}

	private static extractUrl(req: Request): string 
	{
		return new URL(req.url).pathname;
	}

	private static extractQuery(req: Request): any
	{
		return Object.fromEntries(new URL(req.url).searchParams);
	}

	private static async extractBody(req: Request): Promise<any>
	{
		if (req.body)
			return req.json();
		return new Object();
	}

	private static extractHeader(req: Request): any
	{
		return Object.fromEntries(req.headers);
	}
}
