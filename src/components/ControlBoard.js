import { Board } from '../assets/utilities/MyStyledComps';

function ControlBoard(props) {
    return (
        <Board control>
            <div>
                <h1>Welcome {props.githubData.login}!</h1>
                <h4>This is your <em>ControlBoard</em> where you perform the magic...</h4>
            </div>
        </Board>
    );
}

export default ControlBoard;
