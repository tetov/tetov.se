import Cite from "citation-js";
import { Data, Date, ItemType, Person } from "csl-json";
import { parse as htmlParse } from "node-html-parser";

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_+.~#?&//=]*/;
const DOI_REGEX = /(doi:)(10.\d{4,9}\/[-._;()/:A-Z0-9]+[^.])/gi;

const addLinksToHTML = (text: string): string => {
  const match = text.match(URL_REGEX);
  let returnText = text;
  if (match) {
    match.map((url) => {
      returnText = returnText.replace(
        url,
        `<a href="${url}" class="link-style">${url}</a>`,
      );
    });
  }
  returnText = returnText.replaceAll(
    DOI_REGEX,
    `<a href="https://doi.org/$2" class="link-style">$1$2</a>`,
  );
  return returnText;
};

const coerceCLSDateFromNode = (date: Queries.CLSDate): Date => {
  return { "date-parts": [[date.year, date.month ?? 1, date.day ?? 1]] };
};

// "event" --> "event-title" in newer CSL definition
type UpdatedData = Data & {
  "event-title": string | undefined;
};

const coerceCSLObjectFromNode = (
  node: Queries.CvYamlPublications,
): UpdatedData => ({
  ...node,
  id: node.id,
  type: node.type as ItemType,
  DOI: node.DOI ?? undefined,
  accessed:
    node.accessed != undefined
      ? coerceCLSDateFromNode(node.accessed)
      : undefined,
  issued: coerceCLSDateFromNode(node.issued),
  author: node.author as Person[],
  URL: node.URL ?? undefined,
  abstract: node.abstract ?? undefined,
  language: node.language ?? undefined,
  page: node.page ?? undefined,
  publisher: node.publisher ?? undefined,
  source: node.source ?? undefined,
  "container-title": node.container_title ?? undefined,
  event: node.event_title ?? undefined,
  "event-title": node.event_title ?? undefined,
  "publisher-place": node.publisher_place ?? undefined,
});

export const createPublicationHTML = (
  publication: Queries.CvYamlPublications,
): string => {
  const cslObject = coerceCSLObjectFromNode(publication);

  const cite = Cite(cslObject, { forceType: "@csl/object" });

  const htmlString = cite.format("bibliography", {
    template: "apa",
    format: "html",
  });

  const parsedHtml = htmlParse(htmlString);
  const innerDiv = parsedHtml.querySelector(".csl-entry");

  if (!innerDiv?.innerHTML) {
    throw new TypeError("Either no inner div found, or no inner HTML on node.");
  }
  const result = addLinksToHTML(innerDiv.innerHTML);

  return result;
};
