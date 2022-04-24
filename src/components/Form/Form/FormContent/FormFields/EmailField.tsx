import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface EmailFieldProps {
  className?: string;
  fullWidth?: boolean;
}

export const EmailField: FC<EmailFieldProps> = ({ className, fullWidth = false }) => {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController({ name: testFormParamsKey.email });
  return (
    <TextField
      className={className}
      error={Boolean(error)}
      fullWidth={fullWidth}
      helperText={Boolean(error) && error?.message}
      label={i18n.get('FORM_EMAIL_LABEL')}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      value={value}
    />
  );
};
