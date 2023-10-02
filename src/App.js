import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Contact from './components/Contact'
import Profile from './components/Profile';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      <Header />
      <Features />
      <Profile />
    </div>
  );
}

export default App;
