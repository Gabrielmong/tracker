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

export const formatCurrency = (amount: number, currency: string) => {
  const symbol = getCurrecySymbol(currency);
  return `${symbol} ${formatNumber(amount)}`;
};
