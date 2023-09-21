import { RouterMethod } from "./router.enum";

export type RouterHandler = (req: Request) => Response;

export interface Router {
	
	path?: string;

	method?: RouterMethod;

	handler: RouterHandler;
}
