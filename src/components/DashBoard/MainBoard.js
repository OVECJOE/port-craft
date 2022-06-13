import { Main } from '../StyledComponents/MyStyledComps';
import PreviewBoard from '../PreviewBoard/PreviewBoard';
import { Outlet } from 'react-router-dom';

import SideBar from './SideBar';
import UserInfoContextProvider from '../../contexts/UserInfoContext';

function MainBoard() {
    return (
        <UserInfoContextProvider>
            <Main>
                <SideBar />
                <PreviewBoard />
                <Outlet />
            </Main>
        </UserInfoContextProvider>
    )
}

export default MainBoard;
