import { Application } from "https://deno.land/x/oak/mod.ts";
import customRouter from "./components/index.ts";

// create new Application instance
const app = new Application();

// create new Router instance
const { router, compState } = customRouter;
console.log(`Init compination states: ${JSON.stringify(compState)}`);

// register all routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen("127.0.0.1:8000");
