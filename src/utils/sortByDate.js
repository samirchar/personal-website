export function sortByDateDesc(array) {
  return [...array].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    const parseDate = d => new Date(Date.parse('1 ' + d));
    return parseDate(b.date) - parseDate(a.date);
  });
} 