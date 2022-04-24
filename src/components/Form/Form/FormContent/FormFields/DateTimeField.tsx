import { DateTimePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { formatISO, isValid } from 'date-fns';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface DateTimeFieldProps {
  className?: string;
  fullWidth?: boolean;
}

export const DateTimeField: FC<DateTimeFieldProps> = ({ className, fullWidth = false }) => {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController({ name: testFormParamsKey.datetime });
  return (
    <DateTimePicker
      ampm={false}
      className={className}
      inputFormat="dd/LL/yyyy HH:mm"
      inputRef={ref}
      label={i18n.get('FORM_DATETIME_PICKER_LABEL')}
      mask="__/__/____ __:__"
      onChange={(newDate) => {
        if (newDate && isValid(newDate)) onChange(formatISO(newDate));
      }}
      value={new Date(value)}
      renderInput={(props) => (
        <TextField
          {...props}
          error={Boolean(error)}
          fullWidth={fullWidth}
          helperText={Boolean(error) && error?.message}
          name={name}
          onBlur={onBlur}
        />
      )}
    />
  );
};
