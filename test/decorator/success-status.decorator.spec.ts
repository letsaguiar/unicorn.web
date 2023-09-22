import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { ResponseStatus } from "../../src/response/response.enum";

describe('PutDecorator', () => {
	const controller = new TestController();

	test('should add successStatus metadata', () => {
		const status = Reflect.getMetadata("router:success-status", controller, 'successStatus');
		expect(status).toEqual(ResponseStatus.OK);
	})
});
