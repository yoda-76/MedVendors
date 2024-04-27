const dateconverter = (inputDate)=>{
    const parts = inputDate.split("/");
    const yyyy = parts[2];
    const mm = parts[1].padStart(2, '0');
    const dd = parts[0].padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
export default dateconverter