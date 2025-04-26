"use client";

import React from "react";
import { FlashCardArray } from "react-flashcards";
import Image from "next/image";

import "../../src/Styles/Flashcards.css"

import Link from "next/link";

const ReactCards = () => {
  const flashcards = [
    {
      id: 1,
      front: (
        <h2>
          What is the hook memo and when should you use it?
        </h2>
      ),
      back: (
        <>
        <p className="ml-2 max-w-3xs md:max-w-md">
        React.memo is a higher-order component that wraps a component to prevent unnecessary re-renders.
        You should use it when you:
        </p>
        <ul className="ml-2 max-w-3xs md:max-w-md">
            <li>1.Your component re-renders often, even if props don’t change.</li>
            <li>2.Your component is kind of "expensive" to render (e.g., has heavy computations or complex JSX).</li>
            <li>3.You're passing props that don't change much between renders.</li>
        </ul>
        </>
      ),
    },
   
  ];

  return (
    <>
      <FlashCardArray
        // @ts-ignore
        cards={flashcards}
        controls={true}
        showCount={true}
        autoPlay={false}
        onCardChange={(id, index) =>
          console.log(`Card change detected: ID ${id}, Index: ${index}`)
        }
        onCardFlip={(id, index, state) =>
          console.log(
            `Card flipped: ID ${id}, Index: ${index}, Flipped: ${state}`
          )
        }
      />
      <Link
        href="/"
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32"
      >
        Homepage
      </Link>
    </>
  );
};

export default ReactCards;
