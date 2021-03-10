/**
 * VOIP_Server component template
 */

import {
  ComponentType,
  HttpBackendComponent,
  HttpBackendComponentMethod,
  prepareComponentPath,
} from "../shared/shared.ts";

/**
 * Initialize phone states
 * @param state 
 */
const initComponent = (state: any) => {
  state.work = 0;
  state.office = 0;
};

/**
 * Please return a function which will handle the HTTP request
 *  The returned function will get handed over to oak Router instance
 *  We just need to scope ones the compinatin state object,
 *  therefore we return a function
 * 
 * @param state compination state passed from server level
 * @returns oak Router handler function
 */
const httpComponentHandler = (state: any) =>
  (ctx: any) => {
    ctx.response.body = "<html><body><h1>SIPBell Body</h1></body></html>";
    if (state.work === 1) {
      state.work = 1;
      state.office = 0;
    } else {
      state.work = 0;
      state.office = 1;
    }
  };

/** 
 * Define new HttpBackendComponent and export it for registering it later
*/
const component: HttpBackendComponent = {
  name: "sipbell",
  type: ComponentType.HTTP,
  method: HttpBackendComponentMethod.PUT,
  path: prepareComponentPath("/sipbell/"),
  init: initComponent,
  handler: httpComponentHandler,
};

export default component;
