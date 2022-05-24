import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import CusAuth from './pages/CusAuth';
import DevAuth from './pages/DevAuth';
import DashBoard from './pages/DashBoard';
import { BrowserRouter as Router, Routes, Route, Navigate }
  from 'react-router-dom';
import Home from './components/Home';
import ContactInfo from './components/ContactInfo';
import DonateBoard from './components/DonateBoard';
import ProjectBoard from './components/ProjectBoard';
import ThemeCustom from './components/ThemeCustom';

function App() {
  const defaultData = () => ({
    username: "",
    email: "",
    gender: "",
    loggedIn: false,
    isPremium: false,
    password: "",
    confirmPassword: ""
  });
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('portCraftUser')) || defaultData()
  );
  const [githubData, setGithubData] = useState(
    JSON.parse(localStorage.getItem(userData.username)) || {}
  )

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage loggedIn={userData.loggedIn} />} />
          <Route path="/developers" element={<DevAuth />} />
          <Route path="/consumers"
            element={<CusAuth
              userData={userData}
              setUserData={setUserData}
              defaultData={defaultData}
            />}
          />
          {userData.loggedIn &&
            <Route path="/dashboard/*"
              element={<DashBoard
                userData={userData}
                githubData={githubData}
                setGithubData={setGithubData}
              />}
            >
              <Route path='' element={<Home userData={userData}
                githubData={githubData} />} />
              <Route path='contact-info' element={<ContactInfo userData={userData}
                githubData={githubData} />} />
              <Route path='projects' element={<ProjectBoard userData={userData}
                githubData={githubData} />} />
              <Route path='themes' element={<ThemeCustom userData={userData}
                githubData={githubData} />} />
              <Route path='donate' element={<DonateBoard userData={userData}
                githubData={githubData} />} />
            </Route>
          }
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
