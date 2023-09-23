import { HttpStatus } from "../http/http.enum";
import { ResponseParams } from "./response.interface";

export class ResponseBuilder {
	private params: ResponseParams;

	public constructor()
	{
		this.params = { body: null, options: {} };
	}

	setHeader(name: string, value: string): this
	{
		if (!this.params.options.headers)
			this.params.options.headers = new Headers();
		(this.params.options.headers as Headers).set(name, value);
		return this;
	}

	setStatus(status: HttpStatus): this
	{
		this.params.options.status = status;
		return this;
	}

	setStringBody(body: string): this
	{
		this.params.body = body;
		return this;
	}

	setJsonBody(body: object): this
	{
		this.params.body = JSON.stringify(body);
		return this;
	}

	build(): Response
	{
		return new Response(this.params.body, this.params.options);
	}
}
