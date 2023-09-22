import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";
import { ResponseStatus } from "../../src/response/response.enum";

describe('PutDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'put');
		expect(path).toEqual('put');
	})

	test('should add method metada', () => {
		const method = Reflect.getMetadata("router:method", controller, 'put');
		expect(method).toEqual(RouterMethod.PUT);
	})

	test('should add successStatus metadata', () => {
		const status = Reflect.getMetadata("router:success-status", controller, 'put');
		expect(status).toEqual(ResponseStatus.NO_CONTENT);
	})
});
