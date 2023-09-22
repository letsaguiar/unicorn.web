import { Router } from "../router/router.entity";

export interface Controller {
	path: string;

	routers: Router[];

	loadRouters: () => Router[];
}
