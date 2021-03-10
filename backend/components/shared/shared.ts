/**
 * Available HTTP methods for backend components
 */
export const enum HttpBackendComponentMethod {
  GET = 1,
  PUT,
  POST,
}

export const prepareComponentPath = (path: string): string => {
  return path;
};

const initComponentState = (state: any, compName: string): any => {
  console.log("Start initiating compination state object");
  if (state) {
    if (!state[compName]) {
      state[compName] = {};
      console.log("Set compination state to empty object");
      return state[compName];
    }
  }
  return undefined;
};

export const registerComponent = (
  router: any,
  state: any,
  comp: BackendComponent,
) => {
  console.log(
    `Register new component ${JSON.stringify(comp)}`,
  );
  const compState = initComponentState(state, comp.name);

  switch (comp.type) {
    case ComponentType.HTTP: {
      const httpComponent = comp as HttpBackendComponent;
      httpComponent.init(compState);

      switch (httpComponent.method) {
        case HttpBackendComponentMethod.GET: {
          router.get(httpComponent.path, httpComponent.handler(compState));
          break;
        }
        case HttpBackendComponentMethod.PUT: {
          router.put(httpComponent.path, httpComponent.handler(compState));
          break;
        }
        case HttpBackendComponentMethod.POST: {
          router.post(httpComponent.path, httpComponent.handler(compState));
          break;
        }
        default: {
          console.error("Unsported HTTP method tried to register");
        }
      }
      break;
    }
    case ComponentType.REPEATING: {
      const repeatingComponent = comp as RepeatingBackendComponent;
      repeatingComponent.init(compState);
      setInterval(
        repeatingComponent.run,
        repeatingComponent.interval,
        compState,
      );
    }
  }
};

/**
 * Available CompoentTypes
 */
export const enum ComponentType {
  REPEATING = 1,
  HTTP,
}

/**
 * basic BackendCompoment
 */
export interface BackendComponent {
  name: string;
  type: ComponentType;
}

/**
 * Repeating Backend Component
 */
export interface RepeatingBackendComponent extends BackendComponent {
  interval: number;
  init(state: any): void;
  run(state: any): void;
}

/**
 * Http Backend Component
 */
export interface HttpBackendComponent extends BackendComponent {
  method: HttpBackendComponentMethod;
  path: string;
  init(state: any): void;
  handler(state: any): Function;
}
