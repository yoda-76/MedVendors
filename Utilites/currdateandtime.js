export default function currentdateandtime() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = String(currentDate.getFullYear()).slice(-2); // Using last two digits of the year
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  return formattedDateTime;
}
