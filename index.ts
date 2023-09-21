import { Router } from "./src/router/router.interface";
import { RouterMethod } from "./src/router/router.enum";
import { UnicornServer } from "./src/server/unicorn.server";
import { Get } from "./src/router/decorator/get.decorator";
import { Controller } from "./src/controller/controller.decorator";
import { ResponseBuilder } from "./src/response/response.builder";

@Controller()
class TestController {

	@Get('/foo')
	public foo (): Response
	{
		return new ResponseBuilder()
			.setJsonBody({ foo: 'foo' })
			.build();
	}

}

const app = new UnicornServer([ TestController ]);
app.serve(3000);
