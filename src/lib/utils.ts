export default function getYear(): number {
  return new Date().getFullYear();
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === 'string') {
      endMonth = '';
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString('default', { month: 'short' });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} — ${endMonth} ${endYear}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
}
