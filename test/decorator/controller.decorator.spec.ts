import { describe, expect, test } from "bun:test";
import { TestController } from "../test.controller";
import { Controller } from "../../src/controller/controller.interface";

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
			expect(controller.routers).toHaveLength(5);
		});
	});
});
