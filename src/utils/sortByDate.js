export function sortByDateDesc(array) {
  return [...array].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    
    // Check if dates end with "Present" or "present"
    const aIsPresent = a.date.toLowerCase().includes('present');
    const bIsPresent = b.date.toLowerCase().includes('present');
    
    // If one is "Present" and the other isn't, "Present" comes first
    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1;
    
    // If both are "Present", sort by start date (descending)
    if (aIsPresent && bIsPresent) {
      const parseStartDate = d => {
        const startDateStr = d.split('–')[0].trim();
        return new Date(Date.parse('1 ' + startDateStr));
      };
      return parseStartDate(b.date) - parseStartDate(a.date);
    }
    
    // Otherwise, sort by date (descending)
    const parseDate = d => new Date(Date.parse('1 ' + d));
    return parseDate(b.date) - parseDate(a.date);
  });
} 