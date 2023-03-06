import { GetServerSideProps, NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';

const Login: NextPage = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  return {
    props:{

    }
  }
}

export default Login