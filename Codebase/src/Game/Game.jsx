import { useState,useRef } from 'react';
import swal from 'sweetalert';  
import { MdDarkMode,MdOutlineLightMode } from 'react-icons/md'
import './Game.css'

function Game(){
    const[background,setBackground] = useState("darkbg");
    const[grid,setgrid] = useState("darkgrid");

    const boardRef = useRef(null);

    let all=0;
    const[turn,setTurn] = useState(0);

    // eslint-disable-next-line
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

    const draw = (e,num) => {
       if (data[num - 1] === '') {
            const current = turn === 0 ? "X" : "O"
            data[num - 1] = current;
            e.target.innerText = current;
            setTurn(turn === 0 ? 1 : 0)

            for(let i=0;i<9;i++){
                if(data[i]!=="")
                all=all+1;
            }
            // console.log(data);
            checkWinner(data);
        }
    }

    const checkWinner = () => {
        if (data[0]===data[4]  && data[4]!==""&& data[4]===data[8] && data[4]!=="")
        swal("",`Player ${data[0]} wins`,"success");

        else if(data[0]===data[1] && data[1]===data[2] && data[1]!=="")
        swal("",`Player ${data[0]} wins`,"success");

        else if(data[3]===data[4] && data[4]===data[5] && data[4]!=="")
        swal("",`Player ${data[4]} wins`,"success");

        else if(data[6]===data[7] && data[7]===data[8] && data[7]!=="")
        swal("",`Player ${data[6]} wins`,"success");

        else if(data[0]===data[3] && data[3]===data[6] && data[3]!=="")
        swal("",`Player ${data[0]} wins`,"success");

        else if(data[1]===data[4] && data[4]===data[7] && data[4]!=="")
        swal("",`Player ${data[1]} wins`,"success");

        else if(data[2]===data[5] && data[5]===data[8] && data[5]!=="")
        swal("",`Player ${data[5]} wins`,"success");

        else if(data[2]===data[4] && data[4]===data[6] && data[4]!=="")
        swal("",`Player ${data[6]} wins`,"success");

        else if(all===9)
        swal("","Draw Match","success")

    }

    return(
        <>
            <div className={background} ref={boardRef}>

                <div className={grid}>

                    <div className='input grid-1x1' onClick={(e)=>draw(e,1)}> </div>

                    <div className='input grid-1x2' onClick={(e)=>draw(e,2)}> </div>

                    <div className='input grid-1x3' onClick={(e)=>draw(e,3)}> </div>

                    <div className='input grid-2x1' onClick={(e)=>draw(e,4)}> </div>

                    <div className='input grid-2x2' onClick={(e)=>draw(e,5)}> </div>

                    <div className='input grid-2x3' onClick={(e)=>draw(e,6)}> </div>

                    <div className='input grid-3x1' onClick={(e)=>draw(e,7)}> </div>

                    <div className='input grid-3x2' onClick={(e)=>draw(e,8)}> </div>

                    <div className='input grid-3x3' onClick={(e)=>draw(e,9)}> </div>

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