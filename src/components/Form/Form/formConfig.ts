import { formatISO } from 'date-fns';

import { TestForm } from '~/types/form';
import { getKeyObj } from '~/utils/object';

export const testFormDefaultValues: TestForm = {
  email: '',
  password: '',
  range: '',
  position: '',
  languages: {
    javascript: false,
    go: false,
    cpp: false,
  },
  datetime: formatISO(new Date()),
  rememberme: false,
};

export const testFormParamsKey = getKeyObj(testFormDefaultValues);

export const testFormResetConfig = {
  keepErrors: false,
  keepDirty: false,
  keepValues: false,
  keepDefaultValues: true,
  keepIsSubmitted: false,
  keepTouched: false,
  keepIsValid: false,
  keepSubmitCount: false,
};
