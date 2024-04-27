const findage = (dob) => {
  const givenDate = new Date(dob);
  let currentDate = new Date();
  let yearsDiff = currentDate.getFullYear() - givenDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - givenDate.getMonth();
  if (
    monthsDiff < 0 ||
    (monthsDiff === 0 && currentDate.getDate() < givenDate.getDate())
  ) {
    yearsDiff--;
  }
  if (monthsDiff < 0) {
    monthsDiff += 12;
  }
  return `${yearsDiff}Y ${monthsDiff}M`;
};

export default findage;