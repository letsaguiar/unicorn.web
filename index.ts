import { Router } from "./src/router/router.interface";
import { RouterMethod } from "./src/router/router.enum";
import { UnicornServer } from "./src/server/unicorn.server";

const router1: Router = {
	path: '/foo',
	method: RouterMethod.GET,
	handler() {
		return new Response('foo');
	}
}

const router2: Router = {
	path: '/boo',
	method: RouterMethod.POST,
	handler() {
		return new Response('boo');
	}
}

const app = new UnicornServer([ router1, router2 ]);
app.serve(3000);
