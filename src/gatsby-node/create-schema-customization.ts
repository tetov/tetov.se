import type { GatsbyNode } from "gatsby";

const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions: { createTypes },
}) => {
  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      description: String!
      siteURL: String!
      lang: String!
      image: String!
      author: String!
      twitterUsername: String!
      navigation: [Navigation!]!
    }

    type Navigation {
      text: String!
      url: String!
    }

    type MarkdownRemark {
      frontmatter: MarkdownRemarkFrontmatter!
      fields: MarkdownRemarkFields!
    }

    type MarkdownRemarkFrontmatter {
      title: String!
      description: String
      date: Date! @dateformat
      lang: String
      hero: String
      weight: Int
      image: File @fileByRelativePath
      imageAlt: String
      imageCaption: String
      author: String
    }

    type MarkdownRemarkFields {
      slug: String!
      category: String!
    }

    type ContactDataYaml implements Node {
      contactDataList: [ContactDataYamlContactDataList!]!
    }

    type ContactDataYamlContactDataList {
      hcard: String
      label: String!
      text: String!
      url: String
      username: String
      rel: String
      printFriendlyText: String
      metaTags: [String!]
    }

    type CvYaml implements Node {
      basics: CvYamlBasics!
      work: [CvYamlWork!]!
      education: [CvYamlEducation!]!
      skills: [CvYamlSkills!]!
      languages: [CvYamlLanguages!]!
      projects: [CvYamlProjects!]!
      publications: [CvYamlPublications!]!
      teaching: [CvYamlTeaching!]!
    }

    type CvYamlBasics {
      name: String!
      label: String
      image: String
      email: String!
      phone: String!
      url: String!
      summary: String
      location: CvYamlBasicsLocation!
      profiles: [CvYamlBasicsProfiles!]!
    }

    type CvYamlBasicsLocation {
      countryCode: String!
      address: String!
      metaTags: [String!]
    }

    type CvYamlBasicsProfiles {
      network: String!
      username: String
      url: String!
      metaTags: [String!]
    }

    type CvYamlWork {
      name: String!
      position: String!
      startDate: Date @dateformat
      endDate: Date @dateformat
      url: String
      location: String!
      summary: String
      description: String!
      metaTags: [String!]
    }

    type CvYamlEducation {
      institution: String!
      institutionUrl: String
      area: String!
      studyType: String!
      startDate: Date @dateformat
      endDate: Date @dateformat
      metaTags: [String!]
    }

    type CvYamlProjects {
      name: String!
      description: String!
      startDate: Date @dateformat
      endDate: Date! @dateformat
      entity: String!
      roles: [String!]!
      type: String!
      url: String
      location: String!
      metaTags: [String!]
    }

    type CvYamlSkills {
      name: String!
      level: String
      keywords: [String!]!
      metaTags: [String!]
    }

    type CvYamlLanguages {
      language: String!
      fluency: String!
      metaTags: [String!]
    }

    type CvYamlTeaching {
      name: String!
      institution: String
      summary: String
      startDate: Date @dateformat
      endDate: Date @dateformat
      url: String
      metaTags: [String!]
    }

    type CSLName {
      family: String!
      given: String!
    }

    type CSLDate {
      year: Int!
      month: Int
      day: Int
    }

    type CvYamlPublications {
      abstract: String
      accessed: CSLDate
      author: [CSLName!]!
      citation_key: String!
      container_title: String
      DOI: String
      event_place: String
      event_title: String
      issued: CSLDate!
      language: String
      language: String
      license: String
      license: String
      page: String
      publisher_place: String
      publisher: String
      source: String
      title: String!
      type: String!
      URL: String
      metaTags: [String!]
    }
  `);
};

export default createSchemaCustomization;
