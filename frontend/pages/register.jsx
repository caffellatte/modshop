import Head from 'next/head'
import getConfig from 'next/config';
import Layout from '../components/Layout'
import RegistrationForm from '../components/RegistrationForm'

const { publicRuntimeConfig } = getConfig();
const { strapiURL } = publicRuntimeConfig;

export default function Home() {
  return (
    <Layout page="register">
      <Head>
        <title>MODSHOP Register</title>
        <meta name="description" content="MODSHOP Store Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegistrationForm strapiURL={strapiURL} />
    </Layout>
  )
}
