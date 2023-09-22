import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";
import { ResponseStatus } from "../../src/response/response.enum";

describe('DeleteDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'delete');
		expect(path).toEqual('delete');
	})

	test('should add method metada', () => {
		const method = Reflect.getMetadata("router:method", controller, 'delete');
		expect(method).toEqual(RouterMethod.DELETE);
	})

	test('should add successStatus metadata', () => {
		const status = Reflect.getMetadata("router:success-status", controller, 'delete');
		expect(status).toEqual(ResponseStatus.NO_CONTENT);
	})
});
