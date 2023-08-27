export const timeFormatter = (spendDate: string) => {
  if (!spendDate) return "No date available";

  const date = new Date(spendDate);

  return `${date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })} - ${date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
};
