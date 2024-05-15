import React, { useRef, useState } from 'react'
import './App.css'
import circleIcon from './assets/circle.png'
import crossIcon from './assets/cross.png'

let data = ["","","","","","","","",""];

const App = () => {

  let [count , setCount] = useState(0);
  let [lock , setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxarray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
    if(count % 2 === 0){
      e.target.innerHTML = `<img src='${crossIcon}'>`;
      data[num] = "x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src='${circleIcon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkwin();
  }

  const checkwin = () => {

    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
      {
        won(data[2]);
      }

    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
      {
        won(data[5]);
      }

    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }

    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
      {
        won(data[6]);
      }

    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
      {
        won(data[7]);
      }

    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }

    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }

    else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
      {
         won(data[2]);
      }

    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
      {
         won(data[6]);
      }

  }

  const won = (winner) => {
    setLock(true);
    if(winner==="x")
      {
        titleRef.current.innerHTML = `Congratulations: <img src=${crossIcon} > wins`;
      }
    else
      {
        titleRef.current.innerHTML = `Congratulations: <img src=${circleIcon} > wins`;
      }
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = 'Tic-Tac-Toe-<span>Game</span>'
    boxarray.map((e)=>{
      e.current.innerHTML = '';
    })
  }

  return (
    <div className='text-center'>

      <h1 className='mt-[50px] flex items-center justify-center text-6xl' ref={titleRef}>
        Tic-Tac-Toe- <span className='text-cyan-300'>Game</span>
      </h1>

      <div className="mt-5">

        <div className="flex justify-center">

          <div onClick={(e)=>{toggle(e,0)}} ref={box1} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,1)}} ref={box2} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,2)}} ref={box3} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>

        </div>

        <div className="flex justify-center">

          <div onClick={(e)=>{toggle(e,3)}} ref={box4} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,4)}} ref={box5} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,5)}} ref={box6} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>

        </div>

        <div className="flex justify-center">

          <div onClick={(e)=>{toggle(e,6)}} ref={box7} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,7)}} ref={box8} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>
          <div onClick={(e)=>{toggle(e,8)}} ref={box9} className='flex h-[140px] p-6 w-[140px] bg-zinc-800 cursor-pointer border-[4px] border-zinc-900 rounded-xl'></div>

        </div>

      </div>

      <button onClick={()=>{reset()}} className='w-[200px] h-[70px] font-semibold border-none outline-none cursor-pointer bg-zinc-700 rounded-[50px] text-[26px] text-cyan-300 mt-6 mb-12'>
        Reset
      </button>
      
    </div>
  )
}

export default App
