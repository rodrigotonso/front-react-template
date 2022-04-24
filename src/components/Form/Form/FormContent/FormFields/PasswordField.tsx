import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useController } from 'react-hook-form';

import { testFormParamsKey } from '~/components/Form/Form/formConfig';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

interface PasswordFieldProps {
  className?: string;
  fullWidth?: boolean;
}

export const PasswordField: FC<PasswordFieldProps> = ({ className, fullWidth = false }) => {
  const {
    field: { onChange, onBlur, value, name, ref },
    fieldState: { error },
  } = useController({ name: testFormParamsKey.password });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormControl>
      <InputLabel error={Boolean(error)}>{i18n.get('FORM_PASSWORD_LABEL')}</InputLabel>
      <OutlinedInput
        className={className}
        error={Boolean(error)}
        fullWidth={fullWidth}
        label={i18n.get('FORM_PASSWORD_LABEL')}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={i18n.get('FORM_PASSWORD_TOGGLE_PASSWORD_VISIBILITY_TEXT')}
              onClick={handleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {Boolean(error) && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
