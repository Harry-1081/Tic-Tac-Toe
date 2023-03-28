import '../Game/Game.css';
import './Start.css';
import { useStates } from '../States';

function Start() {
    const{ goto } = useStates();
    return(
        <>
        <div className="darkbg">

            <div className='logo-div'>
                <img className='logo-img' alt=''
                src='https://res.cloudinary.com/dnq6fx1oj/image/upload/v1679934258/coollogo_com-4249444_mviuhw.png'></img>
            </div>

            <div className='play-btn-div'>
                <button className='play-btn' onClick={()=>goto("/game")}>Play</button>
            </div>

            <div className='how-btn-div'>
                <button className='how-btn'>How to Play ?</button>
            </div>

            <div className='Settings-btn-div'>
                <button className='Settings-btn'>Settings</button>
            </div>
        </div>
        </>
    );
};
export default Start;