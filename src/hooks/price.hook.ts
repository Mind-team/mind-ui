export enum Currency {
  RUB,
}

export const usePrice = (value: number | null, currency = Currency.RUB) => {
  if (value === null || value === undefined) {
    return [null];
  }
  return [`${value}${currency === Currency.RUB ? "₽" : "$"}`];
};
