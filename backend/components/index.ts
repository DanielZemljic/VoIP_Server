import { Router } from "https://deno.land/x/oak/mod.ts";
import { registerComponent } from "./shared/shared.ts";
import sipbell from "./sipbell/sipbell.ts";
import wmachine from "./wmachine/wmachine.ts";

/**
 * Please register here all needed backend components routes
 */
const router = new Router();
const compState: any = {};

// register components as needed
registerComponent(router, compState, sipbell);
registerComponent(router, compState, wmachine);

// register default route to server http side
router.get("/", (ctx) => {
  ctx.response.body =
    `<html><body><h1>VOIP_Server StatusPage</h1></body></html>`;
  console.log(compState);
});

export default { router: router, compState: compState };
