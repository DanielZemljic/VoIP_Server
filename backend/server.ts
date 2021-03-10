import { Application } from "https://deno.land/x/oak/mod.ts";
import customRouter from "./components/router.ts";

// create new Application instance
const app = new Application();

// create new Router instance
const router = customRouter.router;

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen("127.0.0.1:8000");
