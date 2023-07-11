import { formatNumber } from './numbers';

export const getCurrecySymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    case 'CRC':
      return '₡';
    default:
      return '';
  }
};

export const formatCurrency = (
  amount: number | undefined,
  currency: string | undefined,
) => {
  if (!amount || !currency) {
    return '';
  }

  const symbol = getCurrecySymbol(currency);
  return `${symbol} ${formatNumber(amount)}`;
};

export const getColor = (amount: number) => {
  if (amount > 0) return '#32925E';
  if (amount < 0) return '#C22929';
  return 'black';
};
