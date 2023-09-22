import { Controller } from "../src/controller/controller.decorator";
import { ResponseStatus } from "../src/response/response.enum";
import { Delete } from "../src/router/decorator/delete.decorator";
import { Get } from "../src/router/decorator/get.decorator";
import { Patch } from "../src/router/decorator/patch.decorator";
import { Post } from "../src/router/decorator/post.decorator";
import { Put } from "../src/router/decorator/put.decorator";
import { SuccessStatus } from "../src/router/decorator/success-status.decorator";

@Controller('controller')
export class TestController {

	@Get('get')
	public get() {}

	@Post('post')
	public post() {}

	@Put('put')
	public put() {}

	@Patch('patch')
	public patch() {}

	@Delete('delete')
	public delete() {}

	@SuccessStatus(ResponseStatus.OK)
	@Patch('success-status')
	public successStatus() {}
}
