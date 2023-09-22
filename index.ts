import { UnicornServer } from "./src/server/unicorn.server";
import { Get } from "./src/router/decorator/get.decorator";
import { Controller } from "./src/controller/controller.decorator";
import { Query } from "./src/router/decorator/query.decorator";

@Controller()
class TestController {

	@Get('/foo')
	public foo (@Query() query: any): any 
	{
		return query.foo;	
	}

}

const app = new UnicornServer([ TestController ]);
app.serve(3000);
