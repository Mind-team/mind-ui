export interface IDateHook {
  formattedDate: string | null;
  formattedTime: string | null;
}

export const useDate = (date: string | number | Date | null): IDateHook => {
  if (!date) {
    return { formattedDate: null, formattedTime: null };
  }
  if (typeof date === "string" || typeof date === "number") {
    date = new Date(date);
  }
  const [day, month, year, hours, minutes] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  const formattedDate = `
    ${day > 10 ? day : "0" + day}.${month > 10 ? month : "0" + month}.${year}
  `;
  const formattedTime = `
  ${hours > 10 ? hours : "0" + hours}:${minutes > 10 ? minutes : "0" + minutes}
`;
  return { formattedDate, formattedTime };
};
