// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import AboutMe from './sections/AboutMe';
// import Portfolio from './sections/Portfolio';
// import Contact from './sections/Contact';
// import Resume from './sections/Resume';
// import Footer from './components/Footer';
// import './app.css';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/AboutMe" component={AboutMe} />
//         <Route path="/Portfolio" component={Portfolio} />
//         <Route path="/Contact" component={Contact} />
//         <Route path="/Resume" component={Resume} />
//         {/* Add more routes as needed */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;