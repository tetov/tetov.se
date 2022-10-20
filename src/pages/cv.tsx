import classNames from "classnames";
import { graphql, HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { PropsWithChildren } from "react";
import HeadComponent from "src/components/head";
import Layout from "src/components/layout";
import PageTitle from "src/components/page-title";
import querySiteMetadata from "src/hooks/query-site-metadata";

/* FUNCS */

const cvTimespan = ({
  startDate,
  endDate,
}: {
  startDate?: string;
  endDate?: string;
}) => {
  // both are undefined
  if (!startDate && !endDate) {
    return "";
  }

  // if both are defined and unique
  if (startDate && endDate && startDate !== endDate) {
    return `${startDate} – ${endDate}`;
  }

  // if only one is defined, or they are both the same return either value
  return startDate ?? endDate;
};

type CVTimeSpanKeyedEntryType = {
  startDate?: string;
  endDate?: string;
  heading: JSX.Element;
  url?: string;
};

/* COMPONENTS */

const CVSection: React.FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <section>
    <h3 className="text-xl">{title}</h3>
    <hr className="my-2 border-gray-500" />
    <div className="border-collapse">{children}</div>
  </section>
);

const CVTimeSpanKeyedEntry: React.FC<
  PropsWithChildren<CVTimeSpanKeyedEntryType>
> = ({ startDate, endDate, heading, children }) => (
  <div className="my-4 flex-row flex">
    <div className="flex w-1/4 text-xs tracking-tight pt-1">
      {cvTimespan({ startDate, endDate })}
    </div>
    <div className="flex w-full flex-col pt-6">
      <div className="flex">
        <h3 className="mb-1 font-bold tracking-widest text-sm print:font-normal">
          {heading}
        </h3>
      </div>
      <div className="flex flex-col font-extralight italic">{children}</div>
    </div>
  </div>
);

const CVEntryBody: React.FC<
  React.PropsWithChildren<{ description: JSX.Element | string }>
> = ({ children, description }) => (
  <>
    <div className="flex max-w-prose">{description}</div>
    <div className="flex min-w-full">{children}</div>
  </>
);

const CVPropTable: React.FC<{
  tuples: [key: string, value: JSX.Element | string][];
}> = ({ tuples }) => {
  const sharedTableCellClassNames = "flex p-2 text-sm";

  return (
    <div className="flex flex-col pt-2 w-full">
      {tuples.map(([key, value]) => (
        <div className="flex flex-row border-b border-gray-500 last:border-b-0 justify-between">
          <div className={classNames(sharedTableCellClassNames, "font-medium")}>
            {key}
          </div>
          <div
            className={classNames(
              sharedTableCellClassNames,
              "font-light w-3/5"
            )}
          >
            {value}
          </div>
        </div>
      ))}
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
        <a href={url} className="link-style-alt">
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
    {institutionUrl ? (
      <a href={institutionUrl}>{institution}</a>
    ) : (
      <span>{institution}</span>
    )}
  </CVTimeSpanKeyedEntry>
);
const CVSkills: React.FC<Queries.CvYamlSkills> = () => <></>;
const CVLanguages: React.FC<Queries.CvYamlLanguages> = () => <></>;

const CVProjects: React.FC<Queries.CvYamlProjects> = ({
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
              <ul className="list-inside list-disc">
                {roles.map((role) => (
                  <li>{role}</li>
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

const CV: React.FC<PageProps<Queries.CvQuery>> = ({
  location: { pathname },
  data: {
    allCvYaml: { nodes },
  },
}) => {
  if (nodes.length !== 1) {
    throw new Error("More or less than one CV node found");
  }

  const { basics, work, education, languages, skills, projects } = nodes[0];

  return (
    <Layout pathname={pathname}>
      <article
        className="h-resume"
        itemScope
        itemType="http://schema.org/Person"
      >
        <PageTitle>Curriculum Vitae</PageTitle>
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
            <h2 className="text-2xl font-semibold text-gray-750 pb-px">
              {basics.name}
            </h2>
            <span className="leading-normal text-md text-gray-650 -mt-0.5">
              {basics.summary}
            </span>
          </div>
        </header>
        <CVSection title="Work experience">
          {work.map((w) => (
            <CVWork key={w.name + w.position} {...w} />
          ))}
        </CVSection>
        <CVSection title={"Academic achievements"}>
          {education.map((e) => (
            <CVEducation key={e.studyType} {...e} />
          ))}
        </CVSection>
        <CVSection title={"Work samples"}>
          {projects.map((p) => (
            <CVProjects key={p.name} {...p} />
          ))}
        </CVSection>
        <CVSection title="Skills">
          {skills.map((s) => (
            <CVSkills key={s.name} {...s} />
          ))}
        </CVSection>
        <CVSection title="Languages">
          {languages?.map((l) => (
            <CVLanguages {...l} />
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
      }
    }
  }
`;
