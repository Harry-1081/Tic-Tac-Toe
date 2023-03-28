import { useState,useRef } from 'react';
import swal from 'sweetalert2';  
import { MdDarkMode,MdOutlineLightMode } from 'react-icons/md'
import './Game.css'
import { useStates } from '../States';

function Game(){
    const {background,setBackground,goto,grid,setgrid} = useStates();

    const boardRef = useRef(null);

    let all=0;
    const[turn,setTurn] = useState(0);

    // eslint-disable-next-line
    const [gridvalue, setgridvalue] = useState(['', '', '', '', '', '', '', '', '']);

    const Game = (e,num) => {
       if (gridvalue[num - 1] === '') 
       {
            const XO = turn === 0 ? "X" : "O"
            gridvalue[num - 1] = XO;
            e.target.innerText = XO;
            setTurn(turn === 0 ? 1 : 0)

            for(let i=0;i<9;i++){
                if(gridvalue[i]!=="")
                all=all+1;
            }
            // console.log(e);
            checkWinner(gridvalue);
        }
    }

    const resetgridvalue = () => 
    {
        setgridvalue(['', '', '', '', '', '', '', '', '']);
        setTurn(0);
        goto("/");
    }

    const checkWinner = () => {
        if (gridvalue[0]===gridvalue[4]  && gridvalue[4]!==""&& gridvalue[4]===gridvalue[8] && gridvalue[4]!==""){
        swal.fire("",`Player ${gridvalue[0]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[0]===gridvalue[1] && gridvalue[1]===gridvalue[2] && gridvalue[1]!==""){
        swal.fire("",`Player ${gridvalue[0]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[3]===gridvalue[4] && gridvalue[4]===gridvalue[5] && gridvalue[4]!==""){
        swal.fire("",`Player ${gridvalue[4]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[6]===gridvalue[7] && gridvalue[7]===gridvalue[8] && gridvalue[7]!==""){
        swal.fire("",`Player ${gridvalue[6]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[0]===gridvalue[3] && gridvalue[3]===gridvalue[6] && gridvalue[3]!==""){
        swal.fire("",`Player ${gridvalue[0]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[1]===gridvalue[4] && gridvalue[4]===gridvalue[7] && gridvalue[4]!==""){
        swal.fire("",`Player ${gridvalue[1]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[2]===gridvalue[5] && gridvalue[5]===gridvalue[8] && gridvalue[5]!==""){
        swal.fire("",`Player ${gridvalue[5]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(gridvalue[2]===gridvalue[4] && gridvalue[4]===gridvalue[6] && gridvalue[4]!==""){
        swal.fire("",`Player ${gridvalue[6]} wins`,"success")
        .then((value) => { resetgridvalue() });}

        else if(all===9){
        swal.fire("","Draw Match","success")
        .then((value) => { resetgridvalue() });}

    }

    return(
        <>
            <div className={background} ref={boardRef}>

                <div className={grid}>

                    <div className='input grid-1x1' onClick={(e)=>Game(e,1)}> </div>

                    <div className='input grid-1x2' onClick={(e)=>Game(e,2)}> </div>

                    <div className='input grid-1x3' onClick={(e)=>Game(e,3)}> </div>

                    <div className='input grid-2x1' onClick={(e)=>Game(e,4)}> </div>

                    <div className='input grid-2x2' onClick={(e)=>Game(e,5)}> </div>

                    <div className='input grid-2x3' onClick={(e)=>Game(e,6)}> </div>

                    <div className='input grid-3x1' onClick={(e)=>Game(e,7)}> </div>

                    <div className='input grid-3x2' onClick={(e)=>Game(e,8)}> </div>

                    <div className='input grid-3x3' onClick={(e)=>Game(e,9)}> </div>

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