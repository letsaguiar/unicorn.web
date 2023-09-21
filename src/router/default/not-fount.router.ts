import { ResponseBuilder } from "../../response/response.builder";
import { ResponseStatus } from "../../response/response.enum";
import { Router } from "../router.interface";

export const NotFoundRouter: Router = {

	handler()
	{
		return new ResponseBuilder()
			.setHeader('Connection', 'close')
			.setHeader('Date', new Date().toUTCString())
			.setStatus(ResponseStatus.NOT_FOUND)
			.build();
	}

}
