import { Navigate } from 'react-router-dom';
import './styles/AuthForm.css';

function AuthForm({ handleChange, handleSubmit, userData, isPremium, passStrength }) {
    return (
        <form onSubmit={handleSubmit} className='auth-form-body'>
            <input
                type="email"
                placeholder='Enter Your Email'
                onChange={handleChange}
                name='email'
                value={userData.email}
                className='form-item'
                required
            />
            <input
                type="text"
                placeholder='Enter Your GitHub Username'
                onChange={handleChange}
                name='username'
                value={userData.username}
                className='form-item'
                required
            />
            <div className='gender-menu'>
                <label htmlFor='gender'>Select Your Gender </label>
                <select
                    id='gender'
                    value={userData.gender}
                    onChange={handleChange}
                    name='gender'
                    required
                >
                    <option value="">&mdash;Choose&mdash;</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Rather Not Say</option>
                </select>
            </div>
            {isPremium &&
                <>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        onChange={handleChange}
                        name="password"
                        value={userData.password}
                        className='form-item'
                        required
                    />
                    {userData.password &&
                        <p className='password-strength-info'>
                            Password Strength: <span
                                className={passStrength === 'weak' ? 'red'
                                    : passStrength === 'medium' ? 'blue' : 'green'}
                            >{passStrength}</span>
                        </p>
                    }
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        onChange={handleChange}
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        className='form-item'
                        required
                    />
                </>
            }
            <button>Sign Up</button>
            {userData.loggedIn && <Navigate replace to='/dashboard' />}
        </form>
    )
}

export default AuthForm;