"use client"
import React, { useState } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from 'react';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}
const GameSelectionUI : React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {

  const [activeButton, setActiveButton] = useState('');

  return (
    <>
      <Header/>
<main className='min-h-screen pb-64 flex flex-col w-screen bg-black'>  

    <div className='pt-4 flex flex-col gap-2 p-5'>   
      
       <Slideshow/>
       <div className=' text-xl font-semibold mt-4 w-full border-b-2 border-[#5F5F5F]' >
        
          <div className='flex flex-row gap-2 dark:text-white text-white sm:items-center sm:justify-center'>
           <div className='flex justify-between w-full font-zk text-[#D9D9D9] text-[17px] font-bold'>Games
          
            
            </div> </div>
             </div>

{/* ZOOKS QUEST STAGE 2*/}
<div></div>
            <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover'style={{backgroundImage: `url('/gameimg/ZookBOUNCEicon.png')`}}></div>
                        <div className='text-white font-zk'>Zook&apos;s Quest II</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity4")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-white font-zk font-bold p-1 pl-6 rounded-2xl pr-6 bg-[#FF00CC]'>Play</div>
                        </button>
                      </div>
                    </div>
            
{/* ZOOKS QUEST */}

             <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover'style={{backgroundImage: `url('/gameimg/ZOOKsQuest1080.png')`}}></div>
                        <div className='text-white font-zk'>Zook&apos;s Quest</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-white font-zk font-bold p-1 pl-6 rounded-2xl pr-6 bg-[#FF00CC]'>Play</div>
                        </button>
                      </div>
                    </div>
            </div>
            <div></div>


            <div className='w-full flex items-center text-white text-[16px] font-zk text-center justify-center'>More Games Coming Soon!</div>



    </main>
    <Footer/>
    </>
  );
};

export default GameSelectionUI;





 {/* <div className="flex flex-col items-center justify-center h-full ">
      <div className="p-8 bg-transparent rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">Choose a game to continue:</p>
        <div className="space-y-4">
          <button 
            onClick={() => onGameSelect("unity")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity" ? "Redirecting..." : "Base Game"}
          </button>
          <button 
            onClick={() => onGameSelect("unity2")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity2" ? "Redirecting..." : "Continue to Unity Game 2"}
          </button>
        </div>
      </div>
    </div> */}
