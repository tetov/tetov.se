// Gatsby global variable
declare const __PATH_PREFIX__: string

// convenience type + https://github.com/gatsbyjs/gatsby/pull/26974
declare type GatsbyPage<
  DataType = unknown,
  PageContextType = unknown,
  StateType = unknown
> = React.FC<
  import("gatsby").PageProps<DataType, PageContextType, StateType | null> & {
    params: Record<string, string>
  }
>

// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-523352028
declare type LinkProps<S = unknown> = Omit<
  import("gatsby").GatsbyLinkProps<S>,
  "ref"
> & { exact?: boolean }

// React
declare module "*.png" {
  const value: any
  export = value
}

declare module "*.gif" {
  const value: any
  export = value
}

declare module "*.webp" {
  const value: any
  export = value
}

declare module "*.svg" {
  const value: any
  export = value
}

// CSS modules
declare module "*.css"
