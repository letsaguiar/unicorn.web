import { RouterMethod } from "./router.enum";

export type RouterHandler = (...args) => void;

export interface Router {
	
	path?: string;

	method?: RouterMethod;

	handler: RouterHandler;
}
