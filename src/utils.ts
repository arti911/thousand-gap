export const formatNumber = (
  value: number,
  locale: Intl.LocalesArgument = 'ru',
  options?: Intl.NumberFormatOptions,
) => {
  return new Intl.NumberFormat(locale, options).format(value);
};
