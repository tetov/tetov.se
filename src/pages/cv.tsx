import classNames from "classnames";
import { graphql, HeadFC, PageProps } from "gatsby";
import React, { PropsWithChildren, ReactNode } from "react";
import { createPublicationHTML } from "src/citations";
import ContactDetail from "src/components/contact-detail";
import { cvFormatTimespan } from "src/components/cv";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";
import querySiteMetadata from "src/hooks/query-site-metadata";

/* COMPONENTS */

const LEFT_COL_WIDTH = "w-1/4";

const CVUnorderedList = ({ children }: PropsWithChildren) => (
  <ul className="list-inside list-disc marker:text-purple print:marker:text-light-text">
    {children}
  </ul>
);

const CVSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => (
  <section>
    <div className="mt-8 mb-2 flex-row flex [page-break-inside:avoid]">
      {/* width set up like CVEntry */}
      <div className={classNames("flex", LEFT_COL_WIDTH)} />
      <div className="flex ml-2 w-full max-w-prose">
        <h2 className="text-2xl">{title}</h2>
      </div>
    </div>
    <hr className="gray-border border-y-2" />
    <div className="border-collapse">{children}</div>
  </section>
);
type CVEntryProp = {
  startDate?: string;
  endDate?: string;
  heading?: React.ReactNode;
  url?: string;
};

const CVEntry = ({
  startDate,
  endDate,
  heading,
  children,
}: PropsWithChildren<CVEntryProp>) => (
  <div className="mt-6 mb-4 flex-row flex">
    <div
      className={classNames(
        "flex text-base tracking-tight pt-1 mr-2",
        LEFT_COL_WIDTH,
      )}
    >
      {cvFormatTimespan({ startDate, endDate })}
    </div>
    {(heading && (
      <div className="flex w-full flex-col max-w-prose">
        <div className="flex">
          <h3 className="mb-1 font-bold tracking-widest text-md">{heading}</h3>
        </div>
        <div className="flex flex-col">{children}</div>
      </div>
    )) || <div className="w-full max-w-prose">{children}</div>}
  </div>
);

const CVEntryBody = ({
  children,
  description,
}: PropsWithChildren<{ description: ReactNode }>) => (
  <>
    <div className="flex max-w-prose font-light whitespace-pre-line">
      {description}
    </div>
    <div className="pt-2 flex min-w-full">{children}</div>
  </>
);

const CVPropTable = ({
  tuples,
}: {
  tuples: [key: string, value: ReactNode][];
}) => {
  const sharedTableCellClassNames = "text-sm px-2 py-1 gray-border";

  return (
    <div className="py-1">
      <table className="table-auto">
        <tbody className="border-t-0 divide-y-0">
          {tuples.map(([key, value]) => (
            <tr key={key} className="gray-border">
              <td
                className={classNames(
                  sharedTableCellClassNames,
                  "font-medium border-r-2 text-right",
                )}
              >
                {key}
              </td>
              <td
                className={classNames(sharedTableCellClassNames, "font-light")}
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

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

// check if null or array len 0, accept any object
const notNullOrZeroLength = (obj: any): boolean => (Array.isArray(obj) && obj.length > 0) || obj;

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
          {contactDetailProps.map((c) => (
            <ContactDetail key={c.label} {...c} />
          ))}
        </div>

        { notNullOrZeroLength(work) && (
        <CVSection title="Work experience" key="work">
          {work.map((w) => (
            <CVWork key={`${w.name}${w.position}${w.startDate ?? ""}`} {...w} />
          ))}
        </CVSection> )}

        { notNullOrZeroLength(education) && (
        <CVSection title={"Academic achievements"} key="education">
          {education.map((e) => (
            <CVEducation key={e.studyType} {...e} />
          ))}
        </CVSection>)}

        { notNullOrZeroLength(projects) && (
        <CVSection title={"Work samples"} key="projects">
          {projects.map((p) => (
            <CVProject key={p.name} {...p} />
          ))}
        </CVSection> )}

        { notNullOrZeroLength(publications) && (
        <CVSection title="Publications" key="publications">
          {publications.map((p) => (
            <CVPublication key={p.citation_key} {...p} />
          ))}
          </CVSection>)}

        { notNullOrZeroLength(teaching) && (
          <CVSection title="Teaching experience" key="teaching">
            {teaching.map((t) => (
              <CVTeaching key={t.name} {...t} />
            ))}
        </CVSection>)}

        { notNullOrZeroLength(skills) && (
        <CVSection title="Skills" key="skills">
          {skills.map((s) => (
            <CVSkill key={s.name} {...s} />
          ))}
        </CVSection>)}

        { notNullOrZeroLength(languages) && (
        <CVSection title="Languages" key="languages">
          {languages.map((l) => <CVLanguage key={l.language} {...l} />)}
        </CVSection>)}

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
