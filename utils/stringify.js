export default function stringify(obj) {
  let result = '';
  Object.keys(obj).forEach((key, i) => {
    if (obj[key]) result += `${key}=${obj[key]}`;
    if (obj[key] && i < Object.keys(obj).length - 1) {
      result += '&';
    }
  });
  return result;
}
