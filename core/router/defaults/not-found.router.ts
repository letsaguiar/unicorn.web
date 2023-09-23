import { HttpMethod, HttpStatus } from "../../http/http.enum";
import { ResponseBuilder } from "../../response/response.builder";
import { Router } from "../router.entity";

export const NotFoundRouter = new Router('*', HttpMethod.ALL, () => {
	return new ResponseBuilder()
		.setStatus(HttpStatus.NOT_FOUND)
		.build();
})
