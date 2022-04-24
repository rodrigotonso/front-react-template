import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface RangeFieldProps {
  className?: string;
  fullWidth?: boolean;
}

export const RangeField: FC<RangeFieldProps> = ({ className, fullWidth = false }) => {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController({ name: testFormParamsKey.range });
  return (
    <FormControl>
      <InputLabel error={Boolean(error)}>{i18n.get('FORM_RANGE_LABEL')}</InputLabel>
      <Select
        className={className}
        error={Boolean(error)}
        fullWidth={fullWidth}
        label={i18n.get('FORM_RANGE_LABEL')}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
      >
        <MenuItem value="">{i18n.get('FORM_RANGE_NONE_SELECTED')}</MenuItem>
        <MenuItem value="1-20">1-20</MenuItem>
        <MenuItem value="21-50">21-50</MenuItem>
        <MenuItem value="51-100">51-100</MenuItem>
      </Select>
      {Boolean(error) && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
