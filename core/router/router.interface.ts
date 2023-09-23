import { Context } from "../context/context.entity";

export type RouterHandler = (ctx: Context) => Response;
