import axios from 'axios';
import Head from 'next/head';
import getConfig from 'next/config';
import Layout from '../components/Layout';
import Main from '../components/Main';

const { publicRuntimeConfig } = getConfig();
const { strapiURL } = publicRuntimeConfig;

export default function Home({categories}) {
  return (
    <Layout page="index">
      <Head>
        <title>MODSHOP Catalog</title>
        <meta name="description" content="MODSHOP Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main
        categories={categories}
        strapiURL={strapiURL}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios(`${strapiURL}/categories`);
  const categories = response.data;

  return ({
    props: {
      categories
    }
  });
}