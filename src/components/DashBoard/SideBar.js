import { FaDonate, FaHome } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { GoSettings, GoOctoface, GoProject } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useContext } from 'react';

import { UserInfoContext } from '../../contexts/UserInfoContext';
import { SideMenu, Div, AvatarImg } from '../StyledComponents/MyStyledComps';

const SideBar = () => {
    const { userInfo } = useContext(UserInfoContext);
    const [activeIcon, setActiveIcon] = useState('home');

    const activateIcon = (event) => {
        const { id } = event.currentTarget;
        setActiveIcon(id);
    };
    const setClassForIcon = (id) => activeIcon === id ? 'active-icon' : '';

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
                        <RouterLink to='/dashboard/change_avatar'>
                            <GoOctoface title='Your Github Avatar Not Found' />
                        </RouterLink>
                    }
                    <Div column>
                        <RouterLink to='/dashboard'>
                            <div onClick={activateIcon} id='home'
                                className={setClassForIcon('home')}
                            >
                                <FaHome title='Home' />
                            </div>
                        </RouterLink>
                        <RouterLink to='/dashboard/contact-info'>
                            <div onClick={activateIcon} id='contact'
                                className={setClassForIcon('contact')}
                            >
                                <FcContacts title='Add Contact Info' />
                            </div>
                        </RouterLink>
                        <RouterLink to='/dashboard/projects'>
                            <div onClick={activateIcon} id='projects'
                                className={setClassForIcon('projects')}
                            >
                                <GoProject title='Add or Select Projects' />
                            </div>
                        </RouterLink>
                        <RouterLink to='/dashboard/themes'>
                            <div onClick={activateIcon} id='themes'
                                className={setClassForIcon('themes')}
                            >
                                <GoSettings title='Theme Customization' />
                            </div>
                        </RouterLink>
                    </Div>
                    <RouterLink to='/dashboard/donate'>
                        <div onClick={activateIcon} id='donate'
                            className={setClassForIcon('donate')}
                        >
                            <FaDonate title='Donate' />
                        </div>
                    </RouterLink>
                </IconContext.Provider>
            </SideMenu>
    );
}

export default SideBar;