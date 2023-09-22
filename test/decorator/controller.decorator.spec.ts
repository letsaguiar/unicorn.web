import { describe, expect, test } from "bun:test";
import { TestController } from "../test.controller";
import { Controller } from "../../src/controller/controller.interface";
import { RouterMethod } from "../../src/router/router.enum";

describe('ControllerDecorator', () => {
	const controller = new TestController() as unknown as Controller;

	test('should add path property', () => {
		expect(controller.path).toEqual('controller');
	});

	describe('loadRouters', () => {
		test('should be defined', () => {
			expect(controller.loadRouters).toBeDefined();
		});

		test('should load routers', () => {
			controller.loadRouters();
			expect(controller.routers).toEqual([
				{ path: 'get', method: RouterMethod.GET, handler: controller['get'] },
				{ path: 'post', method: RouterMethod.POST, handler: controller['post'] },
				{ path: 'put', method: RouterMethod.PUT, handler: controller['put'] },
				{ path: 'patch', method: RouterMethod.PATCH, handler: controller['patch'] },
				{ path: 'delete', method: RouterMethod.DELETE, handler: controller['delete'] },
			])
		});
	});
});
