// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Flashcard from "@/app/src/Styles/components/Flashcard";
import Link from "next/link";

const ReactCards = () => {
	return (
		<div className='bg-[#03071280]  mt-12'>
			<h1 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#f7df1e]'>
				The Basics
			</h1>
			<div className='flex justify-center items-center '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is Javascript?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								JavaScript is a versatile scripting language primarily used to
								add interactivity and dynamic behavior to web pages.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What’s the difference between var, let, and const?
							</h2>
						}
						back={
							<ul className='text-md text-gray-700'>
								<li>
									<b>var </b>is global scope, generally used in ES5 and before.
								</li>
								<li>
									<b>const</b> is block scoped and is not reassignable.
								</li>
								<li>
									<b>let</b> is block scoped and IS reassignable.
								</li>
							</ul>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What’s the difference between == and ===
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									== is loose equality. it Converts values to the same type
									before comparing them. so 5 & "5" are the same. === is strict
									and compares values <i>without</i> type conversion.
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
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is null vs undefined?
							</h2>
						}
						back={
							<div className='block'>
								<ul className='text-md text-gray-700'>
									<li>
										<b>undefined</b> variable has been declared but doesnt have
										a value
									</li>
									<li>
										<b>Null</b> means an empty value. It is empty or blank
									</li>
								</ul>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are arrow functions and how are they different?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									They are syntax sugar and can be more concise than regular
									functions
								</p>
								<Image
									src='/arrowFunction.png'
									alt='code snippet of an arrow function'
									width={300}
									height={500}
								/>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are variables?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								A variable is like a container that stores data, It lets you
								save information (like a number, text, object, etc.) and use it
								later in your program
							</p>
						}
					/>
				</div>
			</div>

			{/* START OF METHODS SECTION  */}

			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-sky-500'>
				Methods in Javascript
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
				</div>
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={<p className='text-md text-gray-700'>Answer</p>}
					/>
				</div>
			</div>
			{/* START OF GENERAL QUESTIONS */}
			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-pink-500'>
				General Javascript Questions
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
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
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<ul className='text-md text-gray-700'>
								Answer
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
						front={<h2 className='text-xl font-bold text-black '>Question</h2>}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>Answer</p>
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
