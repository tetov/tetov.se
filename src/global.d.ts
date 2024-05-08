// Gatsby global variable
declare const __PATH_PREFIX__: string;

// React
declare module "*.png" {
  // biome-ignore lint: lint/suspicious/noExplicitAny
  const value: any;
  export = value;
}

declare module "*.gif" {
  // biome-ignore lint: lint/suspicious/noExplicitAny
  const value: any;
  export = value;
}

declare module "*.webp" {
  // biome-ignore lint: lint/suspicious/noExplicitAny
  const value: any;
  export = value;
}

declare module "*.svg" {
  // biome-ignore lint: lint/suspicious/noExplicitAny
  const content: any;
  export default content;
}

// CSS modules
declare module "*.css";

declare module "citation-js";
