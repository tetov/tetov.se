import type { GatsbyNode } from "gatsby";

const createPages: GatsbyNode["createPages"] = async ({
  actions: { createRedirect },
}) => {
  const redirects = [
    {
      fromPath: "/adaptive_clay_formations",
      toPath: "/adaptive-clay-formations",
      isPermanent: true,
    },
    {
      fromPath: "/concrete_calligraphy_growth",
      toPath: "/concrete-calligraphy-growth",
      isPermanent: true,
    },
    {
      fromPath: "/digital_bamboo_pavilion",
      toPath: "/digital-bamboo-pavilion",
      isPermanent: true,
    },
    { fromPath: "/rcf_brunnen", toPath: "/rcf-brunnen", isPermanent: true },
    { fromPath: "/swallows_nest", toPath: "/swallows-nest", isPermanent: true },
  ];

  redirects.forEach((redirect) => createRedirect(redirect));
};

export default createPages;
