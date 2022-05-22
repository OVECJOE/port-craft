import { SideMenu, Main, Div, AvatarImg } from '../assets/utilities/MyStyledComps';
import PreviewBoard from '../components/PreviewBoard';
import ControlBoard from '../components/ControlBoard';
import { FaDonate, FaHome } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { GoSettings, GoOctoface, GoProject } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

function MainBoard({ githubData, userData, github_api }) {
    const iconStyle = {
        color: '#fda069',
        size: '25px',
    }

    return (
        <Main>
            <SideMenu>
                <IconContext.Provider value={iconStyle}>
                    {githubData && githubData.avatar_url ?
                        <AvatarImg
                            src={githubData.avatar_url}
                            alt={githubData.name}
                            title='Your Github Avatar'
                        /> :
                        <RouterLink to='/dashboard/change_avatar'>
                            <GoOctoface title='Your Github Avatar Not Found' />
                        </RouterLink>
                    }
                    <Div column>
                        <RouterLink to='/dashboard'>
                            <FaHome title='Home' />
                        </RouterLink>
                        <RouterLink to='/dashboard/contact-info'>
                            <FcContacts title='Add Contact Info' />
                        </RouterLink>
                        <RouterLink to='/dashboard/projects'>
                            <GoProject title='Add or Select Projects' />
                        </RouterLink>
                        <RouterLink to='/dashboard/themes'>
                            <GoSettings title='Theme Customization' />
                        </RouterLink>
                    </Div>
                    <RouterLink to='/dashboard/donate'>
                        <FaDonate title='Donate' />
                    </RouterLink>
                </IconContext.Provider>
            </SideMenu>
            <PreviewBoard />
            <ControlBoard />
        </Main>
    )
}

export default MainBoard;
