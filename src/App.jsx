// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import Header from './components/header'
// import Carousel from './components/carousel'
// import 'flowbite';
// import Contact from './components/contact';


// function App() {
  
//   return (
//     <>
//      <Header/>
//      <Carousel/>
//      <Contact/>
//     </>
//   )
// }

// export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/footer';
// import About from './components/About';
// import Donation from './components/donation';
// import Contact from './components/Contact';
// import Carousel from './components/carousel';
// import Team from './components/team';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Carousel />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/donation" element={<Donation />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <About/>
//       <Donation/>
//       <Contact/>
//       <Team/>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


import Header from './components/Header';
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
