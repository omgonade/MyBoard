import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';
import { Home } from './home';
import BoardPage from './BoardPage';
import { AboutMe } from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/board/:boardName" element={<BoardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import './App.css';
// import { NavBar } from './NavBar';
// import {Home} from './home';
// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       <Home/>
//     </div>
//   );
// }

// export default App;
