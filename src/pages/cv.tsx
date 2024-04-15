import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";

import { createPublicationHTML } from "src/citations";
import ContactDetail from "src/components/contact-detail";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import querySiteMetadata from "src/hooks/query-site-metadata";
import PageTitle from "src/components/page-title";
import { CVEntry, CVEntryBody } from "src/components/cv";
import { CVSection } from "src/components/cv";
import { CVUnorderedList } from "src/components/cv";
import { CVPropTable } from "src/components/cv";

/* Resume section components */
const CVWork = ({
  name,
  endDate,
  position,
  startDate,
  description,
  url,
}: Queries.CvYamlWork) => (
  <CVEntry
    startDate={startDate ?? undefined}
    endDate={endDate ?? undefined}
    url={url ?? undefined}
    heading={
      <span>
        {`${position} `}
        <span className="font-normal">at </span>
        {url ? (
          <a href={url} className="link-style">
            {name}
          </a>
        ) : (
          <span>{name}</span>
        )}
      </span>
    }
    key={name}
  >
    <CVEntryBody description={description} />
  </CVEntry>
);

const CVEducation = ({
  startDate,
  endDate,
  studyType,
  institution,
  institutionUrl,
}: Queries.CvYamlEducation) => (
  <CVEntry
    heading={<span>{studyType}</span>}
    startDate={startDate ?? ""}
    endDate={endDate ?? undefined}
    key={studyType}
  >
    <CVEntryBody
      description={
        institutionUrl ? (
          <a href={institutionUrl}>{institution}</a>
        ) : (
          <span>{institution}</span>
        )
      }
    />
  </CVEntry>
);

const CVSkill = ({ name, keywords }: Queries.CvYamlSkills) => (
  <CVEntry heading={name}>
    <div className="flex flex-row w-full font-light text-base">
      <CVUnorderedList>
        {keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </CVUnorderedList>
    </div>
  </CVEntry>
);

const CVLanguage = ({ language, fluency }: Queries.CvYamlLanguages) => (
  <CVEntry heading={language}>
    <CVEntryBody description={fluency} />
  </CVEntry>
);

const CVProject: React.FC<Queries.CvYamlProjects> = ({
  name,
  url,
  startDate,
  endDate,
  description,
  entity,
  roles,
  type,
  location,
}) => (
  <CVEntry
    heading={
      <span>
        <a href={url ?? undefined} className="link-style">
          {name}
        </a>
        {`, ${type}`}
      </span>
    }
    startDate={startDate ?? undefined}
    endDate={endDate ?? undefined}
    url={url ?? undefined}
    key={name}
  >
    <CVEntryBody description={description}>
      <CVPropTable
        tuples={[
          ["Location", location],
          [
            roles.length > 1 ? "Roles" : "Role",
            roles.length > 1 ? (
              <CVUnorderedList>
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </CVUnorderedList>
            ) : (
              roles[0]
            ),
          ],
          ["Context", entity],
        ]}
      />
    </CVEntryBody>
  </CVEntry>
);

const CVPublication = (publication: Queries.CvYamlPublications) => (
  <CVEntry>
    <CVEntryBody
      description={
        <span
          className="first-line:indent-6 -indent-4"
          dangerouslySetInnerHTML={{
            __html: createPublicationHTML(publication),
          }}
        />
      }
    />
  </CVEntry>
);

const CVTeaching = ({
  startDate,
  endDate,
  institution,
  name,
  summary,
  url,
}: Queries.CvYamlTeaching) => (
  <CVEntry
    startDate={startDate ?? undefined}
    endDate={endDate ?? undefined}
    heading={
      <span>
        {url ? (
          <a href={url} className="link-style">
            {name}
          </a>
        ) : (
          <span className="font-normal">{name}</span>
        )}
        {institution && `, ${institution}`}
      </span>
    }
  >
    <CVEntryBody description={<span>{summary}</span>} />
  </CVEntry>
);

const CV = ({
  location: { pathname },
  data: {
    allCvYaml: { nodes },
    allContactDataYaml: { nodes: contactDataNodes },
  },
}: PageProps<Queries.CvQuery>) => {
  if (nodes.length !== 1) {
    throw new Error("More or less than one CV node found");
  }

  if (contactDataNodes.length !== 1) {
    throw new Error("More or less than one ContactData node found");
  }

  const {
    // basics, // contact details used
    work,
    education,
    languages,
    skills,
    projects,
    publications,
    teaching,
  } = nodes[0];

  const { contactDataList } = contactDataNodes[0];

  const contactDetailProps = [
    contactDataList.find((c) => c.label === "name"),
    contactDataList.find((c) => c.label === "email"),
    contactDataList.find((c) => c.label === "telephone"),
    contactDataList.find((c) => c.label === "url"),
    contactDataList.find((c) => c.label === "github"),
    contactDataList.find((c) => c.label === "linkedin"),
  ];

  if (contactDetailProps.filter((p) => p === undefined).length > 0) {
    throw new Error(
      `One or more items in list of contact details props is undefined (not found): ${contactDetailProps}`, // eslint-disable-line @typescript-eslint/restrict-template-expressions
    );
  }

  return (
    <Layout pathname={pathname}>
      <article
        className="h-resume"
        itemScope
        itemType="http://schema.org/Person"
      >
        <PageTitle articleHeader>CV</PageTitle>

        <div className="flex flex-row mb-8 md:mb-11 justify-between flex-wrap">
          {contactDetailProps.map((c) => {
            if (!c) throw new Error("contactDetailProp is undefined");

            const key = c.label ?? contactDetailProps.indexOf(c);

            return <ContactDetail key={key} {...c} />;
          })}
        </div>

        <CVSection title="Work experience" key="work">
          {work.map((w) => (
            <CVWork key={`${w.name}${w.position}${w.startDate ?? ""}`} {...w} />
          ))}
        </CVSection>

        <CVSection title={"Academic achievements"} key="education">
          {education.map((e) => (
            <CVEducation key={e.studyType} {...e} />
          ))}
        </CVSection>

        <CVSection title={"Work samples"} key="projects">
          {projects.map((p) => (
            <CVProject key={p.name} {...p} />
          ))}
        </CVSection>

        <CVSection title="Publications" key="publications">
          {publications.map((p) => (
            <CVPublication key={p.citation_key} {...p} />
          ))}
        </CVSection>

        <CVSection title="Teaching experience" key="teaching">
          {teaching.map((t) => (
            <CVTeaching key={t.name} {...t} />
          ))}
        </CVSection>

        <CVSection title="Skills" key="skills">
          {skills.map((s) => (
            <CVSkill key={s.name} {...s} />
          ))}
        </CVSection>

        <CVSection title="Languages" key="languages">
          {languages.map((l) => (
            <CVLanguage key={l.language} {...l} />
          ))}
        </CVSection>
      </article>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <HeadComponent
    pageTitle="CV"
    description={`${querySiteMetadata().author}'s CV`}
    pathname={location.pathname}
  />
);

export default CV;

export const query = graphql`
  query Cv {
    allContactDataYaml {
      nodes {
        contactDataList {
          label
          text
          url
          username
          printFriendlyText
        }
      }
    }
    allCvYaml {
      nodes {
        id
        basics {
          name
          label
          image
          email
          phone
          url
          summary
          location {
            countryCode
            address
          }
          profiles {
            network
            username
            url
          }
        }
        work {
          name
          position
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          url
          location
          summary
          description
          highlights
        }
        education {
          institution
          institutionUrl
          area
          studyType
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          score
        }
        projects {
          name
          description
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          entity
          roles
          type
          url
          location
        }
        skills {
          name
          level
          keywords
        }
        languages {
          language
          fluency
        }
        teaching {
          name
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
          summary
          institution
          url
        }
        publications {
          id
          abstract
          accessed {
            year
            month
            day
          }
          author {
            given
            family
          }
          citation_key
          container_title
          DOI
          event_place
          event_title
          issued {
            year
            month
            day
          }
          language
          license
          page
          page
          publisher
          publisher_place
          source
          title
          type
          URL
        }
      }
    }
  }
`;
