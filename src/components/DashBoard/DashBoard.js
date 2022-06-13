import { useState, useEffect, useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import MainBoard from './MainBoard';
import { Div } from '../StyledComponents/MyStyledComps';
import './DashBoard.css';
import { fetchData, changeProperty } from '../../utils/utils';
import { UserInfoContext } from '../../contexts/UserInfoContext';

function DashBoard() {
    const { userInfo, dispatch } = useContext(UserInfoContext);

    const [githubData, setGithubData] = useState({});
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    const github_api = "https://api.github.com/users/";

    useEffect(() => {
        if (userInfo.loggedIn) {
            const user_repo = `${github_api}${userInfo.username}`;

            isLoading && fetchData(user_repo, setGithubData, setLoading)
            .then(value => {
                const keys = {
                    name: githubData.name, photo: githubData.avatar_url,
                    bio: githubData.bio, location: githubData.location,
                };
                changeProperty(dispatch, keys);
                return setTimeout(() => setLoading(!value), 1000);
            });
        } else {
            setTimeout(() => {
                navigate('/')
              }, 3000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        userInfo.loggedIn ?
            <Fragment>
                {isLoading ?
                    <Div column>
                        <img src={require('../../assets/loading.gif')} alt='loading' className='loading' />
                        <p className='loading-text'>
                            Please wait while your personalized dashboard is being prepared...
                        </p>
                    </Div> :
                    <MainBoard />
                }
            </Fragment> :
            <div className='go-and-login'>
                <h2>YOU ARE NOT LOGGED IN!</h2>
                <p>Please wait while you are being redirected...</p>
            </div>
    )
}

export default DashBoard;
