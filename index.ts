import { UnicornServer } from "./src/server/unicorn.server";
import { Get } from "./src/router/decorator/get.decorator";
import { Controller } from "./src/controller/controller.decorator";

@Controller()
class TestController {

	@Get('/foo')
	public foo (): any 
	{
		return 'foo';	
	}

}

const app = new UnicornServer([ TestController ]);
app.serve(3000);
