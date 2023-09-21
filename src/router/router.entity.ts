import { RouterMethod } from "./router.enum";

export interface Router {
	
	path: string;

	method: RouterMethod;

	handler: (req: Request) => Response;

}
