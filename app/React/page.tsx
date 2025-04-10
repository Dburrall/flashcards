"use client";

import React from "react";
import { FlashCardArray } from "react-flashcards";

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
        <p>
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
        <p>
          Virtual DOM is a lightweight copy of the actual DOM. React uses it to
          detect changes to it and then only updates the nodes needed instead of
          rendering the entire page.
        </p>
      ),
    },
    {
      id: 3,
      front: <h2>What is the difference between state and props in React?</h2>,
      back: (
        <p>
          state is used for mutable data within a component, while props are for
          passing data from parent to child components.
        </p>
      ),
    },
    {
      id: 4,
      front: <h2>How do you handle side effects in React components</h2>,
      back: (
        <p>
          The useEffect hook is how you can handle side effects like fetching
          data.
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
        <p>
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
          important for performance?{" "}
        </h2>
      ),
      back: (
        <p>
          {" "}
          The key prop helps React identify which items in a list are changed,
          added, or removed. It helps minimize the number of components that
          need to be re-rendered, making the application more efficient.
        </p>
      ),
    },
    {
      id: 7,
      front: <h2>What is state in React? </h2>,
      back: (
        <p>
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
        <p>
          Props are objects in react that allow us to pass information to
          components
        </p>
      ),
    },
    {
      id: 9,
      front: <h2>What are the 3 React phases? </h2>,
      back: <p>1. Render Phase 2.Commit phase 3. Clean up Phase</p>,
    },
    {
      id: 10,
      front: (
        <h2>What are fragments in React, and when should you use them?</h2>
      ),
      back: (
        <p>
          A syntax that allows you to group elements without a wrapper node like
          div. They are useful because they have no effect on layout or styles.
        </p>
      ),
    },
    {
      id: 11,
      front: <h2>What is a useReducer and When would you use it</h2>,
      back: (
        <p>
          useReducer is a hook in REAct that allows you to add a reducer to your
          component. You would use it when you have a lot of state that you need
          to manage.
        </p>
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
        autoPlay={true}
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
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      >
        Homepage
      </Link>
    </>
  );
};

export default ReactCards;
