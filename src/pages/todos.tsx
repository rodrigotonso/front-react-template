import { Fragment } from 'react';

import { NextSeo } from 'next-seo';

import { TODOs } from '~/components/TODOs/TODOs';
import { i18n } from '~/internationalization';
import { FC } from '~/types/react';

const TODOsScreen: FC = () => (
  <Fragment>
    <NextSeo title={`${i18n.get('NAVIGATION_TODO')} | Template Front`} />
    <TODOs />
  </Fragment>
);

export default TODOsScreen;
