import { Get } from "../src/router/decorator/get.decorator";

export class TestController {

	@Get('foo')
	public foo() {}

}
