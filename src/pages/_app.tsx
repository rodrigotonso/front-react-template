import { useEffect, Fragment, useMemo } from 'react';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';

import { NavBar } from '~/components/NavBar/NavBar';
import { CONFIG } from '~/config';
import { formController } from '~/controller/form';
import { todosController } from '~/controller/todos';
import { i18n } from '~/internationalization';
import { store } from '~/state/store';
import '~/scss/globals.scss';
import { ReactElement } from '~/types/react';

// TODO: Delete if you won't use it.
// import googleRecaptchaV3 from '~/services/googleRecaptchaV3';
// import keycloakService from '~/services/keycloak';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    const start = async () => {
      // TODO: HERE YOU SHOULD ADD ASYNC THINGS AT THE START OF THE APPLICATION.
      // FOR EXAMPLE, THE REAPTCHA.
      // await googleRecaptchaV3.addScript();
      // keycloakService.initKeycloak(onAuthenticatedCallback);
      formController.getMostUsedWordsFromLocalStorage();
      todosController.getFromLocalStorage();
    };
    start();
  }, []);
  const iconContextProviderValues = useMemo(() => ({ size: '1.5em' }), []);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/png" href={`${CONFIG.ABSOLUTE_URL}/favicon.png`} />
      </Head>
      <NextSeo description={i18n.get('WEBSITE_DESCRIPTION')} />
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <IconContext.Provider value={iconContextProviderValues}>
            <header className="header">
              <NavBar />
            </header>
            <div className="body">
              <div className="responsiveContainer">
                <Component {...pageProps} />
              </div>
            </div>
          </IconContext.Provider>
        </LocalizationProvider>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
