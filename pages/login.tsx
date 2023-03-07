import { GetServerSideProps, NextPage } from 'next';
import Logo from '../components/Logo';
import { Button } from '../components';

const Login: NextPage = () => {
  return (
    <div className='flex min-h-[600px] items-center justify-center'>
      <div className='flex flex-col items-center border border-black w-3/12 p-4'>
        <Logo className='my-8' />
        <form action="/" className='flex flex-col w-full gap-y-4'>
          <fieldset>
            <label htmlFor='mail'>E-MAIL</label>
            <input
              type="email"
              name="mail"
              id="mail"
              className='block border border-black w-full p-2 text-center'
              placeholder='yourmail@mail.com'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='mail'>SENHA</label>
            <input
              type="email"
              name="mail"
              id="mail"
              className='block border border-black w-full p-2 text-center'
              placeholder='********'
            />
          </fieldset>
          <Button text='ENTRAR' />
        </form>
      </div>
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