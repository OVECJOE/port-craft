import styled, { css } from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${props => props.column && css`
        flex-direction: column;
        justify-content: space-between;
        gap: .8rem;
        align-items: center;
    `}

    ${props => props.isLoading && css`
        height: 100vh;
        width: 100vw;
    `}
`;

const AvatarImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px #fda069;
`;

const Main = styled.main`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    height: auto;
`;

const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .1rem;
    z-index: 2;
    top: 5%;
    bottom: 5%;
    width: 45px;
    border-radius: 20px;
    box-shadow: 1px 2px 1px 1px #121212;
    background-color: #021e2f;
`;

export { Div, Main, SideMenu, AvatarImg };
