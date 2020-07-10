import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';
import Footer from '../components/shared/Footer';

const MyApp = ({Component, pageProps}) => {

  const isHomePage = () => Component.name ==='Home'
  return(
    <div className="portfolio-app">
      < Navbar />
      { isHomePage() && <Hero /> }
      <div className="container">
        <Component {...pageProps} />
      </div>
      { isHomePage() && <Footer /> }
    </div>
  )
}

export default MyApp;