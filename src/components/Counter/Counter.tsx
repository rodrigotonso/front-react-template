/**
 * @packageDocumentation
 * @module Views/Components/Counter
 * UI to modify the counter.
 */

import { useState } from 'react';

import { Card, CardContent, Typography, IconButton, TextField } from '@mui/material';
import { MdExposureNeg1, MdExposureZero, MdExposurePlus1, MdAdd, MdRemove } from 'react-icons/md';
import { useSelector } from 'react-redux';

import styles from './Counter.module.scss';
import { counterController } from '~/controller/counter';
import { i18n } from '~/internationalization';
import { counterSelector } from '~/state/features/counterSlice';
import { FC } from '~/types/react';

export const Counter: FC = () => {
  const { value } = useSelector(counterSelector);
  const [amount, setAmount] = useState('0');

  return (
    <div className={styles.mainContainer} data-testid="counter-container">
      <Typography className={styles.title} variant="h4" align="center">
        {i18n.get('COUNTER_TITLE')}
      </Typography>
      <Card className={styles.container}>
        <CardContent>
          <div className={styles.counterNumber}>{value}</div>
          <div className={styles.buttonGroup}>
            <IconButton
              aria-label="increment by one"
              color="primary"
              onClick={counterController.decrement}
            >
              <MdExposureNeg1 />
            </IconButton>
            <IconButton
              aria-label="restore to zero"
              color="primary"
              onClick={counterController.restore}
            >
              <MdExposureZero />
            </IconButton>
            <IconButton
              aria-label="decrement by one"
              color="primary"
              onClick={counterController.increment}
            >
              <MdExposurePlus1 />
            </IconButton>
          </div>
          <div className={styles.buttonGroup}>
            <TextField
              className={styles.inputByAmount}
              variant="standard"
              id="standard-basic"
              label={i18n.get('COUNTER_BY_AMOUNT_INPUT_LABEL')}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
            <IconButton
              aria-label="decrement by amount"
              color="primary"
              onClick={() => counterController.decrementByAmount(Number(amount))}
            >
              <MdRemove />
            </IconButton>
            <IconButton
              aria-label="increment by amount"
              color="primary"
              onClick={() => counterController.incrementByAmount(Number(amount))}
            >
              <MdAdd />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
