/**
 * @packageDocumentation
 * @module Tests/Screens
 * It has the unit tests for the app screens.
 */

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom/extend-expect';
import { Counter } from '../../src/components/Counter/Counter';
import { FormCard } from '../../src/components/Form/FormCard';
import { Home } from '../../src/components/Home/Home';
import { NasaApod } from '../../src/components/NasaApod/NasaApod';
import { TODOs } from '../../src/components/TODOs/TODOs';
import { i18n } from '../../src/internationalization';
import { store } from '../../src/state';

describe('Main Screen', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
  it('should has the correct title', () => {
    render(<Home />);
    expect(screen.getByTestId('main-title')).toHaveTextContent(i18n.get('MAIN_TITLE'));
  });
});

describe('Counter Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
    expect(screen.getByTestId('counter-container')).toBeInTheDocument();
  });
});

describe('TODOs Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <TODOs />
      </Provider>,
    );
    expect(screen.getByTestId('todos-container')).toBeInTheDocument();
  });
});

describe('NasaApod Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <NasaApod />
        </LocalizationProvider>
      </Provider>,
    );
    expect(screen.getByTestId('nasaapod-container')).toBeInTheDocument();
  });
});

describe('Form Screen', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <FormCard />
        </LocalizationProvider>
      </Provider>,
    );
    expect(screen.getByTestId('form-container')).toBeInTheDocument();
  });
});
