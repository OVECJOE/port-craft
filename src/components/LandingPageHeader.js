import './styles/LandingPageHeader.css';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo';

function LandingPageHeader(props) {
    return (
        <header className="App-header">
            <Logo />
            {/* For Responsiveness */}
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger"></label>

            <div className="App-header-btns">
                <RouterLink to="/developers">
                    <button>For Developers</button>
                </RouterLink>
                <RouterLink to={props.loggedIn ? "/dashboard" : "/consumers"}>
                    <button>For Consumers</button>
                </RouterLink>
            </div>
        </header>
    )
}

export default LandingPageHeader;