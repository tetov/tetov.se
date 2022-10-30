import classNames from "classnames";
import { graphql, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { PropsWithChildren } from "react";
import { createPublicationHTML } from "src/citations";
import { cvFormatTimespan } from "src/components/cv";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";
import querySiteMetadata from "src/hooks/query-site-metadata";

/* COMPONENTS */

const CVSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => (
  <section>
    <div className="my-4 flex-row flex">
      <div className="flex w-1/4"></div>
      <div className="flex ml-2 w-full max-w-prose">
        {" "}
        {/* width set up like Keyed entry type*/}
        <h2 className="text-3xl">{title}</h2>
      </div>
    </div>
    <hr className="my-2 border-gray-500" />
    <div className="border-collapse">{children}</div>
  </section>
);

type CVTimeSpanKeyedEntryType = {
  startDate?: string;
  endDate?: string;
  heading: React.ReactNode;
  url?: string;
};

const CVTimeSpanKeyedEntry = ({
  startDate,
  endDate,
  heading,
  children,
}: PropsWithChildren<CVTimeSpanKeyedEntryType>) => (
  <div className="my-8 flex-row flex">
    <div className="flex w-1/4 text-xs tracking-tight pt-1 mr-2">
      {cvFormatTimespan({ startDate, endDate })}
    </div>
    <div className="flex w-full flex-col max-w-prose">
      <div className="flex">
        <h3 className="mb-1 font-bold tracking-widest text-lg">{heading}</h3>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  </div>
);

const CVEntryBody = ({
  children,
  description,
}: PropsWithChildren<{ description: JSX.Element | string }>) => (
  <>
    <div className="flex max-w-prose font-light">{description}</div>
    <div className="flex min-w-full">{children}</div>
  </>
);

/* const CVPropTable: React.FC<{
 *   tuples: [key: string, value: JSX.Element | string][];
 * }> = ({ tuples }) => {
 *   const sharedTableCellClassNames = "flex p-2 text-sm";
 *
 *   return (
 *     <div className="flex flex-col pt-2 w-full">
 *       {tuples.map(([key, value]) => (
 *         <div className="flex flex-row border-b border-gray-500 last:border-b-0 justify-between">
 *           <div className={classNames(sharedTableCellClassNames, "font-medium")}>
 *             {key}
 *           </div>
 *           <div
 *             className={classNames(
 *               sharedTableCellClassNames,
 *               "font-light w-3/5"
 *             )}
 *           >
 *             {value}
 *           </div>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }; */

{
  /* <div className="prose dark:prose-invert w-full"> */
}
const CVPropTable = ({
  tuples,
}: {
  tuples: [key: string, value: JSX.Element | string][];
}) => {
  /* const sharedTableCellClassNames = "flex p-2 text-sm"; */
  const sharedTableCellClassNames = "text-sm px-2 py-2";

  return (
    <div className="pt-4">
      <table className="table-auto">
        <tbody className="border-t-0 divide-y-0 border-gray-500">
          {tuples.map(([key, value]) => (
            <tr key={key} className="border-gray-500">
              <td
                className={classNames(
                  sharedTableCellClassNames,
                  "font-medium border-r-2 border-gray-500 text-right",
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

const CVWork: React.FC<Queries.CvYamlWork> = ({
  name,
  location,
  /* description, */
  endDate,
  position,
  startDate,
  summary,
  url,
}) => (
  <CVTimeSpanKeyedEntry
    startDate={startDate ?? undefined}
    endDate={endDate ?? undefined}
    url={url ?? undefined}
    heading={
      url ? (
        <a href={url} className="link-style">
          {name}
        </a>
      ) : (
        <span>{name}</span>
      )
    }
    key={name}
  >
    <CVEntryBody description={summary}>
      <CVPropTable
        tuples={[
          ["Position", position],
          ["Location", location],
        ]}
      />
    </CVEntryBody>
  </CVTimeSpanKeyedEntry>
);

const CVEducation: React.FC<Queries.CvYamlEducation> = ({
  startDate,
  endDate,
  studyType,
  institution,
  institutionUrl,
}) => (
  <CVTimeSpanKeyedEntry
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
  </CVTimeSpanKeyedEntry>
);
const CVSkill = ({ name, keywords }: Queries.CvYamlSkills) => (
  <CVTimeSpanKeyedEntry heading={name}>
    <div className="flex flex-row w-full font-light text-m">
      <ul className="list-inside list-disc marker:text-purple">
        {keywords.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>
    </div>
  </CVTimeSpanKeyedEntry>
);
const CVLanguage = ({ language, fluency }: Queries.CvYamlLanguages) => (
  <CVTimeSpanKeyedEntry heading={language}>
    <CVEntryBody description={fluency} />
  </CVTimeSpanKeyedEntry>
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
  <CVTimeSpanKeyedEntry
    heading={
      <span>
        <a href={url ?? undefined} className="link-style-alt">
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
              <ul className="list-inside list-disc marker:text-purple">
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            ) : (
              roles[0]
            ),
          ],
          ["Context", entity],
        ]}
      />
    </CVEntryBody>
  </CVTimeSpanKeyedEntry>
);

const CVPublication = (publication: Queries.CvYamlPublications) => (
  <CVTimeSpanKeyedEntry heading="">
    <CVEntryBody
      description={
        <span
          dangerouslySetInnerHTML={{
            __html: createPublicationHTML(publication),
          }}
        />
      }
    ></CVEntryBody>
  </CVTimeSpanKeyedEntry>
);

const CV = ({
  location: { pathname },
  data: {
    allCvYaml: { nodes },
  },
}: PageProps<Queries.CvQuery>) => {
  if (nodes.length !== 1) {
    throw new Error("More or less than one CV node found");
  }

  const { basics, work, education, languages, skills, projects, publications } =
    nodes[0];


  return (
    <Layout pathname={pathname}>
      <article
        className="h-resume"
        itemScope
        itemType="http://schema.org/Person"
      >
        <PageTitle>CV</PageTitle>
        <header className="flex items-center mb-8 md:mb-11">
          <StaticImage
            src="../headshot.jpg"
            alt={`Photo of ${basics.name}`}
            width={80}
            height={80}
            objectFit="cover"
            objectPosition="top"
          />
          <div className="ml-3">
            <p className="text-2xl font-semibold text-gray-750 pb-px">
              {basics.name}
            </p>
            <p className="leading-normal text-md text-gray-650 -mt-0.5">
              {basics.summary}
            </p>
          </div>
        </header>
        <CVSection title="Work experience" key="work">
          {work.map((w) => (
            <CVWork key={w.name + w.position + w.startDate} {...w} />
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
        <CVSection title="Skills" key="skills">
          {skills.map((s) => (
            <CVSkill key={s.name} {...s} />
          ))}
        </CVSection>
        <CVSection title="Languages" key="languages">
          {languages?.map((l) => (
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
        publications {
          accessed {
            year
            month
            day
          }
          author {
            given
            family
          }
          abstract
          citation_key
          event_place
          publisher
          publisher_place
          container_title
          event_title
          URL
          type
          page
          source
          title
          DOI
          issued {
            year
            month
            day
          }
          language
          license
          page
        }
      }
    }
  }
`;
