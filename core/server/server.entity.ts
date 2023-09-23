export class UnicornServer {

	public serve(port: number): void
	{
		Bun.serve({
			port,
			fetch: () => {
				return new Response('hi');
			}
		})
	}

}
