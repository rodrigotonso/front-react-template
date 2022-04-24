import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface PositionFieldProps {
  className?: string;
}

export const PositionField: FC<PositionFieldProps> = ({ className }) => {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController({ name: testFormParamsKey.position });
  return (
    <FormControl>
      <FormLabel error={Boolean(error)}>{i18n.get('FORM_POSITION_LABEL')}</FormLabel>
      <RadioGroup
        className={className}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
      >
        <FormControlLabel
          value={i18n.get('FORM_POSITION_OPTION1')}
          control={<Radio />}
          label={i18n.get('FORM_POSITION_OPTION1')}
        />
        <FormControlLabel
          value={i18n.get('FORM_POSITION_OPTION2')}
          control={<Radio />}
          label={i18n.get('FORM_POSITION_OPTION2')}
        />
        <FormControlLabel
          value={i18n.get('FORM_POSITION_OPTION3')}
          control={<Radio />}
          label={i18n.get('FORM_POSITION_OPTION3')}
        />
      </RadioGroup>
      {Boolean(error) && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
