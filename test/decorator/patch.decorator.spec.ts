import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";
import { ResponseStatus } from "../../src/response/response.enum";

describe('PatchDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'patch');
		expect(path).toEqual('patch');
	})

	test('should add method metada', () => {
		const method = Reflect.getMetadata("router:method", controller, 'patch');
		expect(method).toEqual(RouterMethod.PATCH);
	})

	test('should add successStatus metadata', () => {
		const status = Reflect.getMetadata("router:success-status", controller, 'patch');
		expect(status).toEqual(ResponseStatus.NO_CONTENT);
	})
});
