import styled, { css } from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: space-between;
    align-items: center;
    
    ${props => props.column && css`
        flex-direction: column;
        justify-content: space-between;
    `}

    ${props => props.isLoading && css`
        height: 100vh;
        width: 100vw;
    `}

    ${props => props.contactInfo && css`
        background-color: #fda069;
        gap: 1rem;
        width: 100%;
        margin: 0 0 0 45px;
        padding: 1rem;
        justify-content: center;
        color: #fda069;
    `}

    ${props => props.rightCard && css`
        width: 50%;
        height: 60%;
        background-color: #021e2f;
        padding: 1rem;
        border-radius: 3%;
        font-weight: 500;

        & > h1 {
            text-align: center;
            font-size: 2rem;
            font-weight: 500;
        }

        @media (max-width: 600px) {
            width: 100%;
            height: 50%;
            margin: 0;
        }

        @media (min-width: 1025px) {
            width: 45%;
            margin: 20px;
        }
    `}

    ${props => props.leftCard && css`
        min-width: 30%;
        color: #fff;
        margin: 0;
        justify-items: flex-start;
        color: #021e2f;

        & .active {
            background-color: white !important;
            fill: white;
            border: 4px outset #222;
        }

        & > .title {
            font-size: calc(.9rem + 2vmin);
        }

        & > p {
            font-size: .7rem;
            width: 60%;
            font-weight: 800;
            text-align: center;
            margin-bottom: 1.2rem;
        }

        & > .direct-contact {
            display: flex;
            flex-direction: column;
            gap: 1.1rem;
        }

        & > .direct-contact > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;
            border: 2px solid #021e2f;
            cursor: pointer;
            padding: .2rem .4rem;
            border-radius: 5px;
            width: 100%;
            transition: all 1s ease;
        }

        & > .direct-contact > div:hover {
            color: #fda069;
            background-color: #021e2f;
            transition: all 1s ease;
            border: 2px outset #fff;
        }

        & > .indirect-contact {
            display: flex;
            gap: .5rem;
            margin-top: 2rem;
            overflow-x: auto;
            scroll-behaviour: scroll;
        }

        & > .indirect-contact svg {
            cursor: pointer;
            border: 2px solid #fff;
            padding: .3rem;
            border-radius: 20%;
            width: 100%;
            transition: all 500ms ease-out;
        }

        & > .indirect-contact svg:hover {
            fill: #fff;
            border: 2px solid #021e2f;
            transition: all 500ms ease-in;
        }

        @media (max-width: 600px) {
            & > .direct-contact > div {
                font-size: .8rem;
            }
        }
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
    height: 100vh;
    width: 100vw;
`;

const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .1rem;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 0 3% 3% 0;
    width: 45px;
    z-index: 2;
    background-color: #021e2f;
    box-shadow: 2px 3px 10px 0px #fda269;

    @media (min-width: 1025px) {
        width: 60px;
    }
`;

const Board = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 1rem;
    position: absolute;
    font-family: 'Advent Pro', 'Macondo', courier, sans-serif, monospace;
    background-color: #fda069;
    padding: 1.5rem;
    top: 0;
    left: 45px;
    color: #172b4d;
    min-height: 100vh;
`;

export { Div, Main, SideMenu, AvatarImg, Board };
