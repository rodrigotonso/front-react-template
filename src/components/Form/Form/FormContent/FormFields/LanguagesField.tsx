// import { useEffect } from 'react';
import { FormControl, FormControlLabel, Checkbox, FormGroup, FormLabel } from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface LanguagesFieldProps {
  className?: string;
}

export const LanguagesField: FC<LanguagesFieldProps> = ({ className }) => {
  const {
    field: { value: javascriptValue, onChange: javascriptOnChange },
  } = useController({ name: testFormParamsKey.languages.javascript });
  const {
    field: { value: goValue, onChange: goOnChange },
  } = useController({ name: testFormParamsKey.languages.go });
  const {
    field: { value: cppValue, onChange: cppOnChange },
  } = useController({ name: testFormParamsKey.languages.cpp });
  return (
    <FormControl className={className}>
      <FormLabel>{i18n.get('FORM_LANGUAGES_LABEL')}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onChange={javascriptOnChange}
              checked={javascriptValue}
              value={javascriptValue}
            />
          }
          label={i18n.get('FORM_LANGUAGES_JAVASCRIPT')}
        />
        <FormControlLabel
          control={<Checkbox onChange={goOnChange} checked={goValue} value={goValue} />}
          label={i18n.get('FORM_LANGUAGES_GO')}
        />
        <FormControlLabel
          control={<Checkbox onChange={cppOnChange} checked={cppValue} value={cppValue} />}
          label={i18n.get('FORM_LANGUAGES_CPP')}
        />
      </FormGroup>
    </FormControl>
  );
};
