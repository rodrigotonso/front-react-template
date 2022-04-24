import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import { FormCard } from '~/components/Form/FormCard';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

const FormScreen: FC = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_FORM')} | Template Front`} />
    <FormCard />
  </Fragment>
);

export default FormScreen;
