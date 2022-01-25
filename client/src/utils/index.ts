export const parseDate = (date: string | Date | undefined): string => {
  if (date) return (date as string).split("T")[0];
  return '';
}
