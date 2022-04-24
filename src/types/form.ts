/**
 * @packageDocumentation
 * @hidden
 * Has the types of form.
 */

export type WordsOptionType = {
  inputValue?: string;
  word: string;
};

export type ItemListType = {
  item: '';
  amount: 0;
};

export type TestForm = {
  email: string;
  password: string;
  range: string;
  position: string;
  languages: {
    javascript: boolean;
    go: boolean;
    cpp: boolean;
  };
  datetime: string;
  rememberme: boolean;
};
