/**
 * Utilidades para formateo de datos
 */

/**
 * Formatea una fecha a string legible
 * 
 * :param date: Fecha a formatear
 * :param locale: Locale para el formateo
 * :returns: String con la fecha formateada
 */
export const formatDate = (date: Date, locale = 'es-ES'): string => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Formatea un número como moneda
 * 
 * :param amount: Cantidad a formatear
 * :param currency: Código de moneda ISO
 * :param locale: Locale para el formateo
 * :returns: String con la cantidad formateada como moneda
 */
export const formatCurrency = (
  amount: number,
  currency = 'USD',
  locale = 'es-ES'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Trunca un texto y añade puntos suspensivos
 * 
 * :param text: Texto a truncar
 * :param maxLength: Longitud máxima del texto
 * :returns: Texto truncado con puntos suspensivos si es necesario
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

