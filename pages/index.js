import Navbar from '../components/shared/Navbar';
import Hero from '../components/shared/Hero';
import Content from '../components/shared/Content';
import Topics from '../components/shared/Topics';
import PostPage from '../components/shared/PostsPage';
import LoginPage from '../components/shared/LoginPage';
import Replier from '../components/shared/Replier';
import Footer from '../components/shared/Footer';

const Home = () => (
  <div className="portfolio-app">
    <Navbar />
    <Hero />
    <div className="container">
      <Content />
      <Topics />
      <PostPage />
      <LoginPage />
    </div>
    <div className='reply-controls'>
      <Replier />
    </div>
    <Footer />
  </div>
)

export default Home;