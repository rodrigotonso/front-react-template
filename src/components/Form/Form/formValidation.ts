import * as yup from 'yup';

import { i18n } from '~/internationalization';
import { TestForm } from '~/types/form';

export const testFormValidationSchema: yup.SchemaOf<TestForm> = yup
  .object({
    email: yup
      .string()
      .required(i18n.get('FORM_EMAIL_REQUIRED'))
      .email(i18n.get('FORM_EMAIL_INVALID')),
    password: yup
      .string()
      .required(i18n.get('FORM_PASSWORD_REQUIRED'))
      .min(8, i18n.get('FORM_PASSWORD_TOO_SHORT')),
    range: yup.string().required(i18n.get('FORM_RANGE_REQUIRED')),
    position: yup.string().required(i18n.get('FORM_POSITION_REQUIRED')),
    languages: yup
      .object({
        javascript: yup.boolean().required(),
        go: yup.boolean().required(),
        cpp: yup.boolean().required(),
      })
      .required(),
    datetime: yup.string().required(),
    rememberme: yup.boolean().required(),
  })
  .required();
