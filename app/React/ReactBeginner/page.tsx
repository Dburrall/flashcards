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
          What happens if you exclude the dependency array from your useEffect?{" "}
        </h2>
      ),
      back: (
        <p className="ml-2 max-w-3xs md:max-w-md">
          The useEffect will run after every component update, including prop
          changes.
        </p>
      ),
    },
    {
      id: 2,
      front: (
        <h2>
          What is the virtual DOM, and how does React use it to optimize
          performance
        </h2>
      ),
      back: (
        <p className="ml-2 max-w-3xs">
          Virtual DOM is a lightweight copy of the actual DOM. React uses it to
          detect changes to it and then only updates the nodes needed instead of
          rendering the entire page.
        </p>
      ),
    },
    {
      id: 3,
      front: <h2>What is state in react?</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          State of a component is an object that holds some information that may
          change over the lifetime of the component
        </p>
      ),
    },
    {
      id: 4,
      front: <h2>What are props in React?</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          Props are inputs to components. They are single values or objects
          containing a set of values that are passed to components on creation
          similar to HTML-tag attributes
        </p>
      ),
    },
    {
      id: 5,
      front: (
        <h2>
          What is the virtual DOM and why is it important for performance?{" "}
        </h2>
      ),
      back: (
        <p className="ml-2 max-w-3xs">
          The virtual DOM is an in-memory representation of the real DOM
          elements. The Virtual DOM allows React to perform a more intelligent
          update, meaning it can quickly update only the necessary parts of the
          UI, rather than re-rendering the entire page.
        </p>
      ),
    },
    {
      id: 6,
      front: (
        <h2>
          What is the purpose of key prop in React lists, and why is it
          important for performance?
        </h2>
      ),
      back: (
        <>
          <p className="mb-4 pt-8 ml-2 max-w-sm md:max-w-full">
            The key prop helps React identify which items in a list are changed,
            added, or removed.
          </p>

          <Image src="/keys.png" alt="export image" height={500} width={500} />
          <p className="mb-8 mt-4 ml-2 max-w-sm md:max-w-full">
            This helps minimize the number of components that need to be
            re-rendered, making the application more efficient.
          </p>
        </>
      ),
    },
    {
      id: 7,
      front: <h2>What is state in React? </h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          State of a component is an object that holds some information that may
          change over the lifetime of the component. Const [state,setState] =
          setState(false);
        </p>
      ),
    },
    {
      id: 8,
      front: <h2>What are props in React? </h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          Props are objects in react that allow us to pass information to
          components
        </p>
      ),
    },
    {
      id: 9,
      front: <h2>What are the 3 React phases? </h2>,
      back: (
        <ol className="ml-2 max-w-3xs">
          <li>Render Phase</li>
          <li>Commit phase </li>
          <li>Clean up Phase</li>
        </ol>
      ),
    },
    {
      id: 10,
      front: (
        <h2>What are fragments in React, and when should you use them?</h2>
      ),
      back: (
        <p className="ml-2 max-w-3xs">
          A syntax that allows you to group elements without a wrapper node like
          div. They are useful because they have no effect on layout or styles.
        </p>
      ),
    },
    {
      id: 11,
      front: <h2>What is a useReducer and When would you use it</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          useReducer is a hook in React that allows you to add a reducer to your
          component. You would use it when you have a lot of state that you need
          to manage.
        </p>
      ),
    },
    {
      id: 12,
      front: <h2>What is the children prop?</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          Children is a prop that allows you to pass components as data to other
          components, just like any other prop you use.
        </p>
      ),
    },
    {
      id: 13,
      front: <h2>Why does React use className instead of class?</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          The attribute class is a keyword in JavaScript, and JSX is an
          extension of JavaScript. That's the principle reason why React uses
          className instead of class.
        </p>
      ),
    },
    {
      id: 14,
      front: <h2>What is Development Mode in React?</h2>,
      back: (
        <p className="ml-2 max-w-3xs">
          Development mode in React is the environment you use while building
          and debugging your application. It's designed to help you catch
          mistakes early and understand what's happening in your app.
        </p>
      ),
    },
    {
      id: 14,
      front: <h2>How do you import and export components in React?</h2>,
      back: (
        <>
          <p className="mb-8 ml-2 max-w-3xs">
            You should use default for exporting the components
          </p>
          <Image
            src="/export.png"
            alt="export image"
            height={500}
            width={500}
          />
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
