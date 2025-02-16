export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return parsedDate.toString() === 'Invalid Date'
    ? ''
    : new Intl.DateTimeFormat('en-GB').format(parsedDate);
};
