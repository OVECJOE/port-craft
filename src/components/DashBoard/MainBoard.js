import { Main } from '../StyledComponents/MyStyledComps';
import { Outlet } from 'react-router-dom';

import SideBar from './SideBar';

function MainBoard() {
    return (
        <Main>
            <SideBar />
            <Outlet />
        </Main>
    )
}

export default MainBoard;
