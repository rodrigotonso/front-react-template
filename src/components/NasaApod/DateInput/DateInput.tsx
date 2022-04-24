/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import { useState } from 'react';

import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';

import styles from '../NasaApod.module.scss';
import { nasaApodController } from '~/controller/nasaApod';
import { i18n } from '~/internationalization';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import { FC } from '~/types/react';

export const DateInput: FC = () => {
  const { date } = useSelector(nasaApodSelector);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(date));
  const handleDateChange = (changedDate: any) => {
    setSelectedDate(changedDate);
    nasaApodController.setDate(new Date(changedDate).toString());
  };

  return (
    <DatePicker
      label={i18n.get('NASAAPOD_SELECT_DATE')}
      value={selectedDate}
      onChange={handleDateChange}
      renderInput={(params) => (
        <TextField {...params} className={styles.dateInput} variant="standard" />
      )}
    />
  );
};
