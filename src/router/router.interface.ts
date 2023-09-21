import { RouterMethod } from "./router.enum";

export type RouterHandler = (...args: any[]) => Response;

export interface Router {
	
	path?: string;

	method?: RouterMethod;

	handler: RouterHandler;
}
