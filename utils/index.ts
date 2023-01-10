export const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ');
};

export const snakeCase = (str: string) => {
  return str.toLowerCase().replaceAll(' ', '_');
};
