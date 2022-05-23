import { Board } from '../assets/utilities/MyStyledComps';
import './styles/ControlBoard.css';
import { GoChevronDown, GoStar } from 'react-icons/go';
import { GiPunch } from 'react-icons/gi';

function ControlBoard(props) {
    return (
        <Board control>
            <div className='welcome-card'>
                <h1 className='welcome-header'>HELLO, {props.githubData.login}!</h1>
                <h4 className='welcome-body'>
                    This is your <em className='emphasis'>Control Board</em> where you perform the magic...
                </h4>
            </div>
            <div className='port-info-card'>
                <div className='news-card'>
                    <div>
                        <h3>News Board</h3>
                        <p>Coming Soon...</p>
                    </div>
                    <button>
                        View More
                        <GoChevronDown />
                    </button>
                </div>
                <div className='instruction-card'>
                    <div className='user-tier'>
                        <p>
                            {props.userData.isPremium ? 'Premium' : 'Freemium'}
                            {props.userData.isPremium &&
                                <span className='premium-star'>
                                    <GoStar />
                                </span>
                            }
                        </p>
                        {!props.userData.isPremium &&
                            <button className='upgrade-btn'>Upgrade <GiPunch /></button>
                        }
                    </div>
                    <button className='premium-benefits-btn'>Learn more about premium benefits</button>
                    <p>
                        Visit your <a href={props.githubData.html_url} className='external-links'>
                            github account</a> to fill in your important details, in case you haven't!
                    </p>
                </div>
            </div>
            <div className='notification-card'>
                <h3 className='notification-title'>Notifications</h3>
                <div className='notifications'>
                    <p>You are all set up!</p>
                </div>
            </div>
            <div className='research-card'>
                <h3>Wanna Learn More About Your Stack By Building Projects?</h3>
                <p>
                    We are currently working on an API that provides you with project-based resources
                    and challenges (based on your stack) scoured from the internet. If you want to benefit from
                    this feature, please {props.userData.isPremium ? 'subscribe for early access.' :
                        'click the button below to upgrade.'}
                </p>
                {props.userData.isPremium ?
                    <div className='subscribe'>
                        <input
                            type='text'
                            placeholder='Enter your email to subscribe'
                        />
                        <button>Subscribe for early access</button>
                    </div> :
                    <button>Click here to upgrade</button>
            }
            </div>
        </Board>
    );
}

export default ControlBoard;
