import { Card, CardContent, Typography } from '@mui/material';

import { FormComponent } from './Form/Form';
import styles from './FormCard.module.scss';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

export interface FormCardProps {
  className?: string;
}

export const FormCard: FC<FormCardProps> = ({ className }) => (
  <div className={className} data-testid="form-container">
    <Typography className={styles.title} variant="h4" align="center">
      {i18n.get('FORM_TITLE')}
    </Typography>
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <FormComponent />
      </CardContent>
    </Card>
  </div>
);
