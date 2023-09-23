export type ResponseBody = 
	| ReadableStream
	| BlobPart
	| BlobPart[]
	| FormData
	| URLSearchParams
	| null

export type ResponseOptions = ResponseInit

export interface ResponseParams
{
	body: ResponseBody;
	options: ResponseOptions;
}
