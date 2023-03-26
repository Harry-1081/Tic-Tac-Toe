import { useState } from 'react';
import { MdDarkMode,MdOutlineLightMode } from 'react-icons/md'
import './Game.css'

function Game(){
    const[background,setBackground] = useState("darkbg");
    const[grid,setgrid] = useState("darkgrid");
    return(
        <>
            <div className={background}>

                <div className={grid}>
                    <div className='grid-1x1'>
                        {/* <span>X</span> */}
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-1x2'> 
                        {/* <span>X</span> */}
                        <span>O</span>

                    </div>

                    <div className='grid-1x3'> 
                        <span>X</span>
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-2x1'> 
                        <span>X</span>
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-2x2'> 
                        {/* <span>X</span> */}
                        <span>O</span>
                    </div>

                    <div className='grid-2x3'> 
                        <span>X</span>
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-3x1'> 
                        {/* <span>X</span> */}
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-3x2'> 
                        {/* <span>X</span> */}
                        {/* <span>O</span> */}
                    </div>

                    <div className='grid-3x3'> 
                        {/* <span>X</span> */}
                        <span>O</span>
                    </div>

                </div>

                <div className='change-theme'>
                    <button className='change-theme-dark' 
                    onClick={()=> 
                    {
                        setBackground("whitebg")
                        setgrid("whitegrid")
                    }}> <MdOutlineLightMode/> </button>
                    <button className='change-theme-light'
                    onClick={()=> 
                    {
                        setBackground("darkbg")
                        setgrid("darkgrid")
                    }}> <MdDarkMode/> </button>
                </div>
            </div>
        </>
    );
};
export default Game;