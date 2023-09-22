import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";

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
});
