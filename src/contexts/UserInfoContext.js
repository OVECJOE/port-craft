import { createContext, useReducer, useEffect } from 'react';
import {v4 as uuid} from 'uuid';

import { userInfoReducer } from '../reducers/userInfoReducer';

export const UserInfoContext = createContext();

const UserInfoContextProvider = (props) => {
    const createUserInfo = () => ({
        id: uuid(), username: "", name: "",
        email: "", gender: "", loggedIn: false,
        isPremium: false, password: null, photo: "",
        location: "", bio: "", projects: [],
        contactInfo: {}, skills: [], jobExps: [],
        roles: [], theme: {},
    });

    const [userInfo, dispatch] = useReducer(userInfoReducer,
        JSON.parse(localStorage.getItem('userInfo')) || createUserInfo()
    );

    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }, [userInfo])

    return (
        <UserInfoContext.Provider value={{userInfo, dispatch}}>
            {props.children}
        </UserInfoContext.Provider>
    );
};

export default UserInfoContextProvider;