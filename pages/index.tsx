import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/Logo';
import {
  Footer,
  Header,
  InstaPics,
  SectionTitle,
  Separator,
  Carousel,
  TopSelling,
  ScrollToTop,
  HomeHightlight
} from '../components/';
import Data from '../fakedata/Data';
import { CarouselContext } from '../contexts/CarouselContext';

const Home: NextPage = () => {

  const {carousel}  = Data;

  return (
    <div>
      <Head>
        <title>Yourbrand Cosmetics</title>
        <meta name="description" content="The brand that focuses on you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
        <CarouselContext>
          <Carousel Data={carousel} />
        </CarouselContext>
        </section>
        <article className='flex flex-col w-full p-4 lg:p-16 gap-y-2'>
          <HomeHightlight />
        </article>
        <div className='flex w-full justify-center'>
          <hr className='w-1/3' />
        </div>
        <section>
          <TopSelling />
        </section>
      </main>
      <section className='mt-20'>
        <div className='flex w-full flex-col md:flex-row items-center justify-between px-4 md:px-8 mb-4 flex-wrap gap-y-1'>
          <div className='flex items-center justify-center flex-col md:flex-row gap-y-1'>
            <SectionTitle title={<Logo />} className="w-full" responsive/>
            <Separator className='hidden md:inline-block'/>
            <span>NAS REDES SOCIAIS</span>
          </div>
          <div className='flex gap-x-2'>
            <Link href={"#"} >
              <a href="">
                <Image src={"/images/assets/fblogo.png"} alt="" width={32} height={32} layout='fixed' />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <Image src={"/images/assets/instalogo.png"} alt="" width={34} height={34} layout='fixed' />
              </a>
            </Link>
          </div>
        </div>
        <div className='grid w-full grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-4' >
          <InstaPics image='/images/products/lp.jpg'/>
          <InstaPics image='/images/products/nc.jpg'/>
          <InstaPics image='/images/products/stm.jpg'/>
          <InstaPics image='/images/products/ycc.jpg'/>
          <InstaPics image='/images/products/nc.jpg'/>
          <InstaPics image='/images/products/stm.jpg'/>
          <InstaPics image='/images/products/lp.jpg'/>
          <InstaPics image='/images/products/youcareshinnee.jpg'/>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Home
