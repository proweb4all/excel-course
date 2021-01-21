export function capitalize(str) {
  if (typeof str !== 'string' || !str) {
    return ''
  }
  return str[0].toUpperCase() + str.slice(1);
}
