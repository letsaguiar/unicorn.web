import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";

describe('GetDecorator', () => {
	const controller = new TestController();

	test('should add path metadata', () => {
		const path = Reflect.getMetadata("router:path", controller, 'foo');
		expect(path).toEqual('foo');
	})
});
