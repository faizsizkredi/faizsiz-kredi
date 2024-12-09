export const getCurrentMonthYear = () => {
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  
  const date = new Date();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${month} ${year}`;
};