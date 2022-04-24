import { FormControl, FormControlLabel, Switch } from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface RememberMeFieldProps {
  className?: string;
}

export const RememberMeField: FC<RememberMeFieldProps> = ({ className }) => {
  const {
    field: { onChange, value, name },
  } = useController({ name: testFormParamsKey.rememberme });
  return (
    <FormControl>
      <FormControlLabel
        control={<Switch className={className} name={name} onChange={onChange} checked={value} />}
        label={i18n.get('FORM_REMEMBER_ME_LABEL')}
        labelPlacement="start"
      />
    </FormControl>
  );
};
