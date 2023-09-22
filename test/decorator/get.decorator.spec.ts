import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";

describe('GetDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'get');
		expect(path).toEqual('get');
	})

	test('should add method metada', () => {
		const method = Reflect.getMetadata("router:method", controller, 'get');
		expect(method).toEqual(RouterMethod.GET);
	})
});
