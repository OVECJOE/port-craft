import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import CusAuth from './pages/CusAuth';
import DevAuth from './pages/DevAuth';
import DashBoard from './pages/DashBoard';
import { BrowserRouter as Router, Routes, Route, Navigate }
  from 'react-router-dom';

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
            <Route path="/dashboard"
              element={<DashBoard />}
            />
          }
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
