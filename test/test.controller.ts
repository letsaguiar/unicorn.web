import { Controller } from "../src/controller/controller.decorator";
import { Get } from "../src/router/decorator/get.decorator";

@Controller('controller')
export class TestController {

	@Get('get')
	public get() {}

}
