/**
 * VOIP_Server component template
 */

import {
  BackendComponent,
  HTTP_COMP_TYPES,
  prepareComponentPath,
} from "../shared.ts";

/**
 *  Please define which HTTP method and base path the component should be registered with
 */
const HTTP_COMP_METHOD = HTTP_COMP_TYPES.PUT;
const HTTP_COMP_PATH = prepareComponentPath("/sipbell/");
const HTTP_COMP_HANDLER = (ctx: any) => {
  ctx.response.body = "<html><body><h1>SIPBell Body</h1></body></html>";
  // POC -> just update the configuration
  // state.counter = state.counter++ ? state.counter : 1;
};

// define BackendComponent
const component: BackendComponent = {
  method: HTTP_COMP_METHOD,
  path: HTTP_COMP_PATH,
  handler: HTTP_COMP_HANDLER,
};

export default component;
