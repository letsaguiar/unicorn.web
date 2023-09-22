import { describe, expect, test } from "bun:test";
import "reflect-metadata";
import { TestController } from "../test.controller";
import { RouterParam } from "../../src/router/router.enum";

describe('ParamsDecorators', () => {
	const controller = new TestController();

	test('should add params metadata', () => {
		const params = Reflect.getMetadata("router:params", controller, "routerParams");
		expect(params).toEqual([
			RouterParam.HEADER, RouterParam.BODY, RouterParam.QUERY
		]);
	});
})
