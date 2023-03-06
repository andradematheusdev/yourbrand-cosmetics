import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserAuthContext } from '../contexts/UserAuthContext';
import { Layout } from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserAuthContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserAuthContext>
  );
}

export default MyApp
