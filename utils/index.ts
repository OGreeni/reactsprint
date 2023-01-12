import jsx from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';

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

export const formatCode = (codeString: string) => {
  const formattedCode = prettier.format(codeString, {
    parser: 'babel',
    plugins: [jsx],
  });
  return formattedCode;
};
