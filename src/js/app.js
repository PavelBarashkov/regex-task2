/* eslint-disable linebreak-style */
export default function validPhone(number) {
  if (/^8/.test(number)) {
    return `+7${number.slice(1).replace(/\s/g, '').replace(/-/g, '').replace(/[()]/g, '')}`;
  }
  return number.replace(/\s/g, '');
}
