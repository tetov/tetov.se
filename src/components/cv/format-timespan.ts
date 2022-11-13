const cvFormatTimespan = ({
  startDate,
  endDate,
}: {
  startDate?: string;
  endDate?: string;
}): string => {
  // if both are present and same
  if (startDate && endDate && startDate == endDate) {
    return startDate;
  }
  // if both are present and unique
  if (startDate && endDate) {
    return `${startDate} – ${endDate}`;
  }

  // if none are present
  if (!startDate && !endDate) {
    return "";
  }

  // one is missing
  // if endDate is present, return it
  // if startDate is present, return it with a dash after
  return endDate ?? `${startDate} –`;
};

export default cvFormatTimespan;
