import { ResponseBuilder } from "../response/response.builder";
import { ResponseStatus } from "../response/response.enum";
import { RouterMethod } from "./router.enum";

export type RouterHandler = (...args: any[]) => any;

export class Router {

	private _response = new ResponseBuilder();
	
	public path?: string;

	public method?: RouterMethod;

	public handler?: RouterHandler;

	private _successStatus?: ResponseStatus;

	get successStatus()
	{
		return this._successStatus;
	}

	set successStatus(status: ResponseStatus)
	{
		this._successStatus = status;
		this._response.setStatus(status);
	}

	public handle(): Response
	{
		if (!this.handler)
			return this._response.build();
		
		const data = this.handler();
		if (typeof data === 'string')
			this._response.setStringBody(data);
		else if (typeof data === 'object')
			this._response.setJsonBody(data);

		return this._response.build();
	}
}
