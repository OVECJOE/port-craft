import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import './About.css';

function About(props) {
    return (
        <main className='about-main'>
            <section className="hero-section">
                <div className="avatar-card">
                    <img src={props.githubData.avatar_url}
                        alt={props.githubData.name}
                    />
                    <div>
                        <h5>{props.githubData.name}</h5>
                        <p>React Developer</p>
                    </div>
                </div>
                <div className="about-card">
                    <div className='about-bio'>
                        <h2>ABOUT ME</h2>
                        <p>{props.githubData.bio}</p>
                    </div>
                    <div className="about-misc">
                        <button><BsDownload /> Download CV</button>
                        <div className="social-links">
                            <a href={`https://twitter.com/${props.githubData.twitter_username}`}
                                target='_blank' rel='noreferrer'
                            >
                                <FaTwitterSquare />
                            </a>
                            <a href={props.githubData.html_url} target='_blank' rel='noreferrer'>
                                <FaGithubSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
