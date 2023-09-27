export default function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}