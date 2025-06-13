// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Flashcard from "@/app/src/Styles/components/Flashcard";
import Link from "next/link";

const ReactCards = () => {
	return (
		<div className='bg-[#03071280]  mt-12'>
			<h1 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-fuchsia-400'>
				The Basics
			</h1>
			<div className='flex justify-center items-center '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>What is React?</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								A JavaScript library for building user interfaces.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are props in React?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								Props are inputs to components. They are single values or
								objects containing a set of values that are passed to components
								on creation, similar to HTML-tag attributes.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are the 3 React phases?
							</h2>
						}
						back={
							<ul className='text-md text-gray-700'>
								<li>1. Render Phase </li>
								<li>2. Commit phase</li>
								<li>3. Clean up Phase</li>
							</ul>
						}
					/>
				</div>
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								Why does React use className instead of class?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								The attribute class is a keyword in JavaScript, and JSX is an
								extension of JavaScript. That's the principle reason why React
								uses className instead of class.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the virtual DOM and why is it important for performance?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								The virtual DOM is an in-memory representation of the real DOM
								elements. The Virtual DOM allows React to update only what is
								necessary instead of everything.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are fragments in React, and when should you use them?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								A syntax that allows you to group elements without a wrapper
								node like div. They are useful because they have no effect on
								layout or styles.
							</p>
						}
					/>
				</div>
			</div>

			{/* START OF HOOKS SECTION  */}

			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#5B9BD5]'>
				Hooks in React
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is state in React?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								State of a component is an object that holds some information
								that may change over the lifetime of the component.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useEffect hook?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								The useEffect Hook in React is used for handling side effects in
								functional components. These side effects can include data
								fetching, subscriptions, or manually changing the DOM.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useReducer hook in React?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								The useReducer hook is a React hook used for managing complex
								state logic. It is an alternative to useState and is generally
								used when you have a lot of state to update.
							</p>
						}
					/>
				</div>
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are the parameters of useState? What is the initial state?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								The initial state and setter function. The initial state can be
								any value: a number, string, boolean, array, object, or even a
								function that returns the state value.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useRef hook in React?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								is a React Hook that lets you reference a value that’s not
								needed for rendering. Sort of like document.querySelector, but
								won't re-render if the useRef is triggered.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								Where do you call your hooks in your file?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								Always at the top level.
								<Image
									src='/topLevel.png'
									alt='Example image'
									width={500}
									height={300}
								/>
							</p>
						}
					/>
				</div>
			</div>
			{/* START OF GENERAL QUESTIONS */}
			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#0cfac2]'>
				General React Questions
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								How do you pass state between components?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									The easiest way is to move the state to a common parent and
									pass it down through props.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/learn/sharing-state-between-components'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What happens when a component recieves new props?
							</h2>
						}
						back={
							<ul className='text-md text-gray-700'>
								<li>1. Props are updated</li>
								<li>2. Component re-renders</li>
								<li>3. Effects may rerun</li>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.zhenghao.io/posts/react-rerender'
									target='_blank'>
									{" "}
									Explanation
								</a>
							</ul>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								Why is there a need to use keys in Lists
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Keys are unique identifiers that help React know which list
									item to re-render and swap out.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/learn/rendering-lists'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
				</div>
			</div>

			<Link
				href='/'
				className='rounded-full white border border-indigo-600 transition-colors flex items-center justify-center bg-white text-background gap-2  dark:hover:bg-[black] dark:hover:text-white font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32 mb-12'>
				Homepage
			</Link>
		</div>
	);
};

export default ReactCards;
