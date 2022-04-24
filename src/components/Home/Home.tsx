import { Typography } from '@mui/material';

import styles from './Home.module.scss';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

export const Home: FC = () => (
  <div className={styles.container} data-testid="main-container">
    <Typography className={styles.title} data-testid="main-title" variant="h4" align="center">
      {i18n.get('MAIN_TITLE')}
    </Typography>
    <Typography className={styles.description} variant="h6" align="center">
      {i18n.get('MAIN_DESCRIPTION')}
    </Typography>
  </div>
);
