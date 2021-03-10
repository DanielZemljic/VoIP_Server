/**
 * Available HTTP methods for backend components
 */
export const enum HTTP_COMP_TYPES {
  GET = 1,
  PUT,
  POST,
}

export const prepareComponentPath = (path: string): string => {
  return path;
};

export const registerComponent = (router: any, comp: BackendComponent) => {
  switch (comp.method) {
    case HTTP_COMP_TYPES.GET: {
      router.get(comp.path, comp.handler);
      break;
    }
    case HTTP_COMP_TYPES.PUT: {
      console.log(`Register new component with path: ${comp.path} and handler: ${comp.handler}`);
      router.put(comp.path, comp.handler);
      break;
    }
    case HTTP_COMP_TYPES.POST: {
      router.post(comp.path, comp.handler);
      break;
    }
    default: {
      console.error("Unsported HTTP method tried to register");
    }
  }
};

export interface BackendComponent {
  method: HTTP_COMP_TYPES;
  path: string;
  handler: Function;
}
