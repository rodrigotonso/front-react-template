import { Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import styles from './FormContent.module.scss';
import { DateTimeField } from './FormFields/DateTimeField';
import { EmailField } from './FormFields/EmailField';
import { LanguagesField } from './FormFields/LanguagesField';
import { PasswordField } from './FormFields/PasswordField';
import { PositionField } from './FormFields/PositionField';
import { RangeField } from './FormFields/RangeField';
import { RememberMeField } from './FormFields/RememberMeField';
import { i18n } from '~/internationalization';
import { TestForm } from '~/types/form';
import { FC } from '~/types/react';
import { getClassName } from '~/utils/components';

export interface FormContentProps {
  className?: string;
}

export const FormContent: FC<FormContentProps> = ({ className }) => {
  const { reset } = useFormContext<TestForm>();
  return (
    <div className={getClassName(styles.formContent, className)}>
      <EmailField />
      <PasswordField />
      <RangeField />
      <div className={styles.radioCheckboxContainer}>
        <PositionField />
        <LanguagesField />
      </div>
      <DateTimeField fullWidth />
      <RememberMeField />
      <div className={styles.buttonContainer}>
        <Button color="inherit" onClick={() => reset()} variant="contained">
          {i18n.get('FORM_RESET_BUTTON_LABEL')}
        </Button>
        <Button type="submit" variant="contained">
          {i18n.get('FORM_SUBMIT_BUTTON_LABEL')}
        </Button>
      </div>
    </div>
  );
};
