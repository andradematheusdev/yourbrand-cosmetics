import { GetServerSideProps, NextPage } from 'next';
import Logo from '../components/Logo';
import { Button } from '../components';
import {Context} from '../contexts/UserAuthContext';
import { useContext, useEffect } from 'react';

const Login: NextPage = () => {

  const {isAuthenticated,setIsAuthenticated} = useContext(Context);

  const SendLoginRequest = () => {
    setIsAuthenticated(true); 
  } 

  useEffect(() => {
    console.log(isAuthenticated);  
  },[,isAuthenticated])
  
  return (
    <div className='flex min-h-[600px] items-center justify-center'>
      <div className='flex flex-col items-center border border-black md:w-4/12 w-2/3 min-w-[400px]  p-4'>
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
              type="password"
              name="pass"
              id="pass"
              className='block border border-black w-full p-2 text-center'
              placeholder='********'
            />
          </fieldset>
          <Button text='ENTRAR' onClick={() => SendLoginRequest()} />
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