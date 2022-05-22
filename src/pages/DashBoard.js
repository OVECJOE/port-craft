import { useState, useEffect } from 'react';
import MainBoard from './MainBoard';
import { Div } from '../assets/utilities/MyStyledComps';
import './styles/DashBoard.css';
import fetchData from '../assets/utilities/fetchData';

function DashBoard({ userData }) {
    const [isLoading, setLoading] = useState(true);
    const [githubData, setGithubData] = useState(
        JSON.parse(localStorage.getItem(userData.username)) || {}
    )

    const github_api = "https://api.github.com/users/";

    useEffect(() => {
        const user_repo = `${github_api}${userData.username}`;

        isLoading && fetchData(user_repo, setGithubData, setLoading)
        .then(value => setTimeout(() => setLoading(!value), 1000));

        !isLoading && localStorage.setItem(userData.username,
            JSON.stringify(githubData)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <>
            {isLoading ?
                <Div column>
                    <img src={require('../assets/loading.gif')} alt='loading' className='loading' />
                    <p className='loading-text'>
                        Please wait while your personalized dashboard is being prepared...
                    </p>
                </Div> :
                <MainBoard
                    githubData={githubData}
                    userData={userData}
                    github_api={github_api}
                />
            }
        </>
    )
}

export default DashBoard;
