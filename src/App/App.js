import { BrowserRouter as Router, Routes, Route, Navigate }
from 'react-router-dom';

import UserInfoContextProvider from '../contexts/UserInfoContext';
import LandingPage from '../components/LandingPage/LandingPage';
import CusAuth from '../components/CusAuth/CusAuth';
import DevAuth from '../components/DevAuth/DevAuth';
import DashBoard from '../components/DashBoard/DashBoard';
import ControlHome from '../components/ControlHome/ControlHome';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import DonateBoard from '../components/DonateBoard/DonateBoard';
import ProjectBoard from '../components/ProjectBoard/ProjectBoard';
import SkillBoard from '../components/SkillBoard/SkillBoard';
import ThemeCustom from '../components/ThemeCustom/ThemeCustom';
import './App.css';

function App() {

  return (
    <div className="App">
      <UserInfoContextProvider>
        <Router>
          <Routes>
            <Route path="/port-craft" element={<LandingPage />} />
            <Route path="/port-craft/developers" element={<DevAuth />} />
            <Route path="/port-craft/consumers"
              element={<CusAuth />}
            />
            <Route path="/port-craft/dashboard/*"
              element={<DashBoard />}
            >
              <Route path='home' element={<ControlHome />} />
              <Route path='contact-info' element={<ContactInfo />} />
              <Route path='skills' element={<SkillBoard />} />
              <Route path='projects' element={<ProjectBoard />} />
              <Route path='themes' element={<ThemeCustom />} />
              <Route path='donate' element={<DonateBoard />} />
            </Route>
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </UserInfoContextProvider>
    </div>
  );
}

export default App;
