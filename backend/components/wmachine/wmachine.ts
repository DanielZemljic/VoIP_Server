/**
 * VOIP_Server component template
 */

import { ComponentType, RepeatingBackendComponent } from "../shared/shared.ts";

/**
   * Initialize wending machine purchages
   * @param state 
   */
const initComponent = (state: any) => {
  state.purchages = {
    milk: 0,
  };
};

const updateState = (state: any) => {
  state.purchages.milk++;
};

/** 
   * Define new HttpBackendComponent and export it for registering it later
  */
const component: RepeatingBackendComponent = {
  name: "wmachine",
  type: ComponentType.REPEATING,
  interval: 1000,
  init: initComponent,
  run: updateState,
};

export default component;
