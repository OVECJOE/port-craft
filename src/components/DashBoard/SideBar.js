import { FaDonate, FaHome } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { GoSettings, GoOctoface, GoProject } from 'react-icons/go';
import { GiSkills } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { UserInfoContext } from '../../contexts/UserInfoContext';
import { SideMenu, Div, AvatarImg } from '../StyledComponents/MyStyledComps';

const SideBar = () => {
    const { userInfo } = useContext(UserInfoContext);

    const iconStyle = {
        color: '#fda069',
        size: '25px',
    };

    return (
        <SideMenu>
                <IconContext.Provider value={iconStyle}>
                    {userInfo.photo ?
                        <AvatarImg
                            src={userInfo.photo}
                            alt={userInfo.name}
                            title='Your Github Avatar'
                        /> :
                        <NavLink to='/dashboard/change_avatar'>
                            <GoOctoface title='Your Github Avatar Not Found' />
                        </NavLink>
                    }
                    <Div column>
                        <NavLink to='/dashboard/home'>
                            <div><FaHome title='Home' /></div>
                        </NavLink>
                        <NavLink to='/dashboard/contact-info'>
                            <div><FcContacts title='Add Contact Info' /></div>
                        </NavLink>
                        <NavLink to='/dashboard/skills'>
                            <div><GiSkills title='Add or Remove Skills' /></div>
                        </NavLink>
                        <NavLink to='/dashboard/projects'>
                            <div><GoProject title='Add or Remove Projects' /></div>
                        </NavLink>
                        <NavLink to='/dashboard/themes'>
                            <div><GoSettings title='Theme Customization' /></div>
                        </NavLink>
                    </Div>
                    <NavLink to='/dashboard/donate'>
                        <div><FaDonate title='Donate' /></div>
                    </NavLink>
                </IconContext.Provider>
            </SideMenu>
    );
}

export default SideBar;