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
    padding: 0;
    margin: 0;
    gap: 0;
    min-height: 100vh;
    max-height: auto;
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
    left: 1%;
    width: 45px;
    border-radius: 20px;
    box-shadow: 1px 2px 1px 1px #121212;
    background-color: #021e2f;
`;

const Board = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding: .5rem 1rem;
    width: 50%;
    min-height: 100vh;
    max-height: auto;
    overflow: hidden auto;

    ${props => props.control && css`
        background-color: hsla(22, 97%, 70%, 0.541);
        color: #172b4d;
    `}

    ${props => props.preview && css`
        box-shadow: 1px 1px 2px 1px #122122;
    `}
`;

export { Div, Main, SideMenu, AvatarImg, Board };
