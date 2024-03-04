'use client';
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

type Props = {}

const words = [
  {
    text: "Elevate",
    className: "text-green-300 font-bold",
  },
  {
    text: "your online presence with",
  },
  {
    text: "HD headshots",
    className: "text-red-300 font-bold",
  },
];

const moreWords = [
  {
    text: "Perfect",
    className: "text-yellow-400 font-bold",
  },
  {
    text: "for social profiles, resumes, and portfolios.",
  },
]
  

export const HeaderText = () => {
  return (
    <div className='m-4'>
        <TypewriterEffectSmooth words={words} />
        <TypewriterEffectSmooth words={moreWords} />


    </div>
  )
}

