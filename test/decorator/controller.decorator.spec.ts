import { describe, expect, test } from "bun:test";
import { TestController } from "../test.controller";
import { Controller } from "../../src/controller/controller.entity";

describe('ControllerDecorator', () => {
	const controller = new TestController();

	test('should add path property', () => {
		expect(controller.path as Controller).toEqual('controller');
	})
});
