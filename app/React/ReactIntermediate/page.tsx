// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Flashcard from "@/app/src/Styles/components/Flashcard";
import Link from "next/link";

const ReactIntermediateCards = () => {
	return (
		<div className='bg-[#03071280]  mt-12'>
			<h1 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#f7df1e]'>
				Intermediate React
			</h1>
			<div className='flex justify-center items-center '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is prop drilling?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								passing data (props) down through multiple levels of nested
								components to reach a deeply nested component that needs the
								data.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								How would you fetch data in a React component, and how do you
								handle loading and error states?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								To fetch data in a React component, you typically use the
								useEffect hook for side effects and useState to manage the data,
								loading, and error states.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								Why use cleanup functions in useEffects?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									To prevent memory leaks (like with timer & event listeners) &
									clean up side effects (ubsubscribe from a data stream)
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
				</div>
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What causes a component to re-render?
							</h2>
						}
						back={
							<div className='block'>
								<ul className='text-md text-gray-700'>
									<li>if state or props change</li>{" "}
									<li>its parent re-renders</li>
									<li>A context value it consumes changes</li>
								</ul>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is suspense in React?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Suspense lets you lazy-load components or data and shows a
									fallback while it's loading
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/reference/react/Suspense'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								How does React.memo work
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									React.memo is a HOC that prevents functional components from
									re-rendering unless their props change. Useful for performance
									optimization.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/reference/react/memo'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
				</div>
			</div>

			{/* START OF Intermediate hooks SECTION  */}

			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-sky-500'>
				Intermediate Hooks
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useContext hook?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									useContext is a React Hook that lets you read and subscribe to
									context from your component. It lets you access data without
									prop drilling
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/reference/react/useContext'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useCallback hook?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									A hook that returns a memoized version of a function, useful
									for preventing unnecessary re-renders of child components.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/reference/react/useCallback'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the useMemo hook?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Used to memoize (remember) the result of a calculation so it
									doesn’t run again unless inputs change.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
				</div>
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								what is the useLayoutEffect hook?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Like useEffect but fires before the screen paints. Useful for
									measuring layout
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://react.dev/reference/react/useLayoutEffect'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the difference between useMemo & useCallback?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									useMemo caches the return value of a function. useCallback
									caches the function definition itself.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					{/* <Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/> */}
				</div>
			</div>
			{/* START OF GENERAL QUESTIONS */}
			{/* <h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-pink-500'>
				Advanced React Questions
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
				</div>
			</div> */}

			<Link
				href='/'
				className='rounded-full white border border-indigo-600 transition-colors flex items-center justify-center bg-white text-background gap-2  dark:hover:bg-[black] dark:hover:text-white font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32 mb-12'>
				Homepage
			</Link>
		</div>
	);
};

export default ReactIntermediateCards;
