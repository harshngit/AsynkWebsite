import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Header from '@/components/home-creative-agency/Header';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Intro from '@/components/home-creative-agency/Intro';
import Numbers from '@/components/home-creative-agency/Numbers';
import Intro2 from '@/components/home-creative-agency/Intro2';
import Clients from '@/components/common/Clients';
import Services from '@/components/page-about/Services';
import Portfolio from '@/components/home-personal/Portfolio';


export const metadata = {
  title: 'Asynk - Automating Technology',
  description: 'Asynk is a dynamic web service agency delivering innovative web development, design, and digital solutions tailored to your business needs.',
  icons: {
    icon: '/assets/imgs/asynkfavicon.png',
    shortcut: '/assets/imgs/asynkfavicon.png',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Marq2 />
            {/* <Services /> */}
            {/* <Services /> */}
            {/* <Feat /> */}
            <Services />
            <Intro />
            <Numbers />
            {/* <Portfolio /> */}
            <Portfolio />
            <Intro2 />
            {/* <Team /> */}
            {/* <Testimonials /> */}
            <Clients />
            {/* <Blog /> */}

          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
