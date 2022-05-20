import LandingPageHeader from '../components/LandingPageHeader';
import './styles/LandingPage.css';

function LandingPage(props) {
    return (
        <>
            <LandingPageHeader
                loggedIn={props.loggedIn}
            />
            <main>
                <h1>
                    Welcome to <span className="company-name">portCraft</span>
                </h1>
                <section>
                    <p className="questions-header">
                        If you answer <code>yes</code> to any of the questions below, you are
                        the right place!
                    </p>
                    <ul className='questions-list'>
                        <li>
                            Do you want to apply for a job so badly
                            but don't have a portfolio?
                        </li>
                        <li>
                            Are you feeling too lazy to develop your own portfolio?
                        </li>
                        <li>
                            Are you so busy that you don't have time to work on your
                            portfolio?
                        </li>
                        <li>
                            Are you looking for a quick means of generating a portfolio
                            website for potential employers?
                        </li>
                        <li>
                            Do you feel bad because you don't have the necessary skills to
                            develop a portfolio of your own?
                        </li>
                    </ul>
                    <div className='mission-card'>
                        <p>
                            We help you generate a single page portfolio site with customization features
                            so you can get that job you are hunting for faster. The only thing we require
                            from you is your github username and <strong>we strongly advise you to work on your
                                GitHub profile.</strong>
                        </p>
                        <p>
                            All you have to do is click the <code>For Consumers</code> button!
                        </p>
                    </div>
                    <h6>
                        If you are a developer and wants to build themes for this project
                        or want to contribute to this project, click the <code>For Developers</code> button
                    </h6>
                </section>
            </main>
        </>
    )
}

export default LandingPage;