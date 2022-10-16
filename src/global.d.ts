/* eslint-disable @typescript-eslint/no-explicit-any */
// Gatsby global variable
declare const __PATH_PREFIX__: string;

// React
declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}

declare module "*.webp" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

// CSS modules
declare module "*.css";
