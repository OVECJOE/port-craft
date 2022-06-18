import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import { UserInfoContext } from '../../contexts/UserInfoContext';
import './CusAuth.css';

function CusAuth() {
    const { userInfo, dispatch } = useContext(UserInfoContext);

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        gender: "",
        loggedIn: false,
        isPremium: false,
        password: "",
        confirmPassword: ""
    });
    const [premiumUser, setPremiumUser] = useState(false);
    const [passStrength, setPassStrength] = useState('weak');

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: type === "checkbox" ? checked : value,
        }))

        if (premiumUser) {
            const passPatterns = {
                medium: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/g,
                strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/g
            };

            if (passPatterns.strong.test(userData.password)) {
                setPassStrength('strong');
            } else if (passPatterns.medium.test(userData.password)) {
                setPassStrength('medium');
            } else {
                setPassStrength('weak');
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (userData.isPremium && userData.password !== userData.confirmPassword) {
            alert('Passwords did not match!');
            return;
        }
        
        setUserData(prevUserData => ({
            ...prevUserData,
            loggedIn: true
        }));
    }

    const togglePremiumTrue = () => setPremiumUser(true);
    const togglePremiumFalse = () => setPremiumUser(false);

    useEffect(() => {
        setUserData(prevUserData => ({
            ...prevUserData,
            isPremium: premiumUser
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [premiumUser]);

    useEffect(() => {
        const keys = Object.keys(userData).slice(0, -1);
        if (userData.loggedIn) {
            for (const key of keys) {
                dispatch({type: 'UPDATE_PROPERTY', key, value: userData[key]});
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.loggedIn]);

    return (
        <main className='cus-auth'>
            {userInfo.loggedIn && <Navigate to='/dashboard/home' replace />}
            <div className='cus-auth-card'>
                <div className="cus-auth-header">
                    <Logo />
                    <h2 className='sign-up'>Signup Page</h2>
                </div>
                <div className='cus-auth-body'>
                    <div className='form-header'>
                        <div className='form-header-btns'>
                            <button onClick={togglePremiumFalse}
                                className={premiumUser ? '' : 'tier-active'}
                            >
                                Freemium User
                            </button>
                            <button onClick={togglePremiumTrue}
                                className={premiumUser ? 'tier-active' : ''}
                            >
                                Premium User
                            </button>
                        </div>
                        {premiumUser ?
                            <div className='premium-info'>
                                <p>As a premium user, you enjoy the benefits of:</p>
                                <ul>
                                    <li>Synchronizing your customization settings to the server.</li>
                                    <li>One time Signup.</li>
                                    <li>Access to more themes to make your portfolio unique.</li>
                                </ul>
                            </div> :
                            <p className='freemium-info'>
                                Click the <code>Premium User</code> tab to see the benefits of
                                becoming a premium user.
                            </p>
                        }
                    </div>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        userData={userData}
                        isPremium={premiumUser}
                        passStrength={passStrength}
                    />
                </div>
            </div>
        </main>
    )
}

export default CusAuth;