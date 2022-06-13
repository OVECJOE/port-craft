import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';
import './About.css';

function About() {
    const { githubData } = useContext(UserContext);

    return (
        <main className='about-main'>
            <section className="hero-section">
                <div className="avatar-card">
                    <img src={githubData.avatar_url}
                        alt={githubData.name}
                    />
                    <div>
                        <h5>{githubData.name}</h5>
                        <p>React Developer</p>
                    </div>
                </div>
                <div className="about-card">
                    <div className='about-bio'>
                        <h2>ABOUT ME</h2>
                        <p>{githubData.bio}</p>
                    </div>
                    <div className="about-misc">
                        <button><BsDownload /> Download CV</button>
                        <div className="social-links">
                            <a href={`https://twitter.com/${githubData.twitter_username}`}
                                target='_blank' rel='noreferrer'
                            >
                                <FaTwitterSquare />
                            </a>
                            <a href={githubData.html_url} target='_blank' rel='noreferrer'>
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
