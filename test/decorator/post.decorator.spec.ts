import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterMethod } from "../../src/router/router.enum";

describe('PostDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'post');
		expect(path).toEqual('post');
	})

	test('should add method metada', () => {
		const method = Reflect.getMetadata("router:method", controller, 'post');
		expect(method).toEqual(RouterMethod.POST);
	})
});
