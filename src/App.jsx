
import Header from './components/header';
import Footer from './components/footer';
import About from './components/About';
import Donation from './components/donation';
import Contact from './components/Contact';
import Carousel from './components/carousel';
import Team from './components/team';

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <Carousel />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="donation">
          <Donation />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
