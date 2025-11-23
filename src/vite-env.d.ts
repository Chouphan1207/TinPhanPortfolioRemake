/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// For vite-plugin-svgr: allow importing SVGs as React components
declare module '*.svg?component' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

