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

  // if startDate is present, return it with a dash after
  if (startDate) {
    return `${startDate} –`;
  }

  // if endDate is present, return it
  if (endDate) {
    return endDate;
  }

  return "";
};

export default cvFormatTimespan;
