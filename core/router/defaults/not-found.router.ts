import { HttpMethod, HttpStatus } from "../../http/http.enum";
import { Router } from "../router.entity";

export const NotFoundRouter = new Router('', HttpMethod.ALL, () => {
	return new Response(null, { status: HttpStatus.NOT_FOUND })
})
