import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm';
import './styles/CusAuth.css';

function CusAuth({ userData, setUserData, defaultData }) {
    const [isSigned, setIsSigned] = useState(false);
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

        if (userData.isPremium) {
            if (userData.password !== userData.confirmPassword) {
                alert('Passwords did not match!');
                return;
            }
        }

        setIsSigned(true);
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
        if (userData.loggedIn) {
            localStorage.setItem('portCraftUser',
                JSON.stringify(userData));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSigned]);

    return (
        <main className='cus-auth'>
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