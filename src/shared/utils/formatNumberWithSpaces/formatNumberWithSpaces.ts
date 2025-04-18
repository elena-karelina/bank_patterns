export const formatNumberWithSpaces = (num: number): string => {
  const numStr = num.toString();
  const len = numStr.length;

  if (len <= 4) {
    return numStr;
  }

  const parts = [];
  for (let i = 0; i < len; i += 4) {
    parts.push(numStr.slice(i, i + 4));
  }

  return parts.join(" ");
};
