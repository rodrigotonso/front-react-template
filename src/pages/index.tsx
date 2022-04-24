import { Fragment } from 'react';

import Head from 'next/head';

import { Home } from '~/components/Home/Home';
import { FC } from '~/types/react';

const HomeScreen: FC = () => (
  <Fragment>
    <Head>
      <title>Template Front</title>
    </Head>
    <Home />
  </Fragment>
);

export default HomeScreen;
