import {useState} from 'react';
import { Board } from '../assets/utilities/MyStyledComps';
import About from '../assets/utilities/About';
import Home from '../assets/utilities/Home';
import './styles/PreviewBoard.css';

function PreviewBoard(props) {
    const [pageName, setPageName] = useState('about')
    return (
        <Board preview>
            <nav className='preview-navbar'>
                <button onClick={() => setPageName('about')}
                    className={pageName === 'about' && 'active'}
                >ABOUT ME</button>
                <span className='slash'>/</span>
                <button onClick={() => setPageName('home')}
                    className={pageName === 'home' && 'active'}
                >HOME</button>
            </nav>
            {pageName === 'about' ?
                <About {...props} /> :
                pageName === 'home' &&
                <Home />
            }
        </Board>
    );
}

export default PreviewBoard;
