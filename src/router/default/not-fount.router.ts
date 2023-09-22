import { ResponseStatus } from "../../response/response.enum";
import { RouterBuilder } from "../router.builder";

const NotFoundRouter = new RouterBuilder()
	.setSuccessStatus(ResponseStatus.NOT_FOUND)
	.build();

export { NotFoundRouter }
