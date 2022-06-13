import {useState} from 'react';
import { Board, Div } from '../StyledComponents/MyStyledComps';
import './PreviewBoard.css';

function PreviewBoard() {
    const [pageName, setPageName] = useState('about')
    return (
        <Board preview>
            <Div>
                <nav className='preview-navbar'>
                    <button onClick={() => setPageName('about')}
                        className={pageName === 'about' ? 'active' : ''}
                    >ABOUT ME</button>
                    <span className='slash'>/</span>
                    <button onClick={() => setPageName('home')}
                        className={pageName === 'home' ? 'active' : ''}
                    >HOME</button>
                </nav>
                {/* {pageName === 'about' ?
                    <About /> :
                    pageName === 'home' &&
                    <Home />
                } */}
            </Div>
        </Board>
    );
}

export default PreviewBoard;
