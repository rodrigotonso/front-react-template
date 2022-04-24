import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import { NasaApod } from '~/components/NasaApod/NasaApod';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

const NasaApodScreen: FC = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_NASAAPOD')} | Template Front`} />
    <NasaApod />
  </Fragment>
);

export default NasaApodScreen;
