import '../Game/Game.css';
import './Start.css';
import { useStates } from '../States';

function Start() {
    const{ background,goto } = useStates();
    return(
        <>
        <div className={background}>

            <div className='play-btn-div'>
                <button className='play-btn' onClick={()=>goto("/game")}>Play</button>
            </div>

            <div className='how-btn-div'>
                <button className='how-btn'>How to Play ?</button>
            </div>
        </div>
        </>
    );
};
export default Start;