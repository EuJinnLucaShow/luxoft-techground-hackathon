export const dateFormatting =(originalDateString) => {
  const originalDate = new Date(originalDateString);

  const day = originalDate.getDate();
  const month = originalDate.getMonth() + 1;
  const year = originalDate.getFullYear();
  const hours = addZero(originalDate.getHours());
  const minutes = addZero(originalDate.getMinutes());

  const formattedDate = `${day} ${getMonthName(month)} ${year} ${hours}:${minutes}`;

return formattedDate

}

const getMonthName = (monthNumber) =>{
  const monthNames = [
    'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
  ];
  return monthNames[monthNumber - 1];
}

function addZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
