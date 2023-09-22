import { UnicornRequest } from "../request/request.entity";
import { ResponseBuilder } from "../response/response.builder";
import { ResponseStatus } from "../response/response.enum";
import { RouterMethod, RouterParam } from "./router.enum";

export type RouterHandler = (...args: any[]) => any;

export class Router {

	private _response = new ResponseBuilder();
	
	public path?: string;

	public method?: RouterMethod;

	public handler?: RouterHandler;

	private _successStatus?: ResponseStatus;

	public params?: RouterParam[];

	get successStatus()
	{
		return this._successStatus;
	}

	set successStatus(status: ResponseStatus)
	{
		this._successStatus = status;
		this._response.setStatus(status);
	}

	private async extractParams(req: Request): Promise<any[]>
	{
		if (!this.params)
			return [];

		const request = await UnicornRequest.build(req);
		const paramsMap = {
			[RouterParam.QUERY]: request.query,
			[RouterParam.BODY]: request.body,
			[RouterParam.HEADER]: request.header,
		}

		const params = [];
		for (const param of this.params)
		{
			params.push(paramsMap[param]);
		}

		return params.reverse();
	}

	public async handle(req: Request): Promise<Response>
	{
		if (!this.handler)
			return this._response.build();
		
		const params = await this.extractParams(req);
		const data = this.handler.apply(null, params);
		if (typeof data === 'string')
			this._response.setStringBody(data);
		else if (typeof data === 'object')
			this._response.setJsonBody(data);

		return this._response.build();
	}
}
