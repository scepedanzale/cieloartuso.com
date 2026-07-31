
export function formatItalianDate(date: Date | string) {
  const value = new Date(date);

  return value.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}