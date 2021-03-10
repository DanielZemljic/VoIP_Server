import { Router } from "https://deno.land/x/oak/mod.ts";
import { registerComponent } from "./shared.ts";
import sipbell from "./sipbell/sipbell.ts";

/**
 * Please register here all needed backend components routes
 */
const router = new Router();
const combState: any = {};

// register components as needed
registerComponent(router, sipbell);

// register default route to server http side
router.get("/", (ctx) => {
  ctx.response.body =
    "<html><body><h1>VOIP_Server StatusPage</h1></body></html>";
});

export default { router: router, compState: combState };
