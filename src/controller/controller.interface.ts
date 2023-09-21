import { Router } from "../router/router.interface";

export interface Controller {
	path: string;

	routers: Router[];

	loadRouters: () => Router[];
}
