import { useState } from 'react';
import { SideMenu, Main, Div, AvatarImg } from '../assets/utilities/MyStyledComps';
import PreviewBoard from '../components/PreviewBoard';
import { FaDonate, FaHome } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { GoSettings, GoOctoface, GoProject } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function MainBoard(props) {
    const [activeIcon, setActiveIcon] = useState('home');

    const activateIcon = (event) => {
        const { id } = event.currentTarget;
        setActiveIcon(id);
    };
    const iconStyle = {
        color: '#fda069',
        size: '25px',
    };

    const setClassForIcon = (id) => activeIcon === id ? 'active-icon' : '';

    return (
        <Main>
            <SideMenu>
                <IconContext.Provider value={iconStyle}>
                    {props.githubData && props.githubData.avatar_url ?
                        <AvatarImg
                            src={props.githubData.avatar_url}
                            alt={props.githubData.name}
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
            <PreviewBoard
                {...props}
            />
            <Outlet />
        </Main>
    )
}

export default MainBoard;
