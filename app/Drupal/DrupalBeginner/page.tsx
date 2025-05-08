// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Flashcard from "@/app/src/Styles/components/Flashcard";
import Link from "next/link";

const DrupalCards = () => {
	return (
		<div className='bg-[#03071280]  mt-12'>
			<h1 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#f7df1e]'>
				The Basics
			</h1>
			<div className='flex justify-center items-center '>
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
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
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
			</div>

			{/* START OF {insert} SECTION  */}

			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-sky-500'>
				Drupal
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
			</div>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid gird-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
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
			</div>
			{/* START OF GENERAL QUESTIONS */}
			<h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-pink-500'>
				General Drupal Questions
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
			</div>

			<Link
				href='/'
				className='rounded-full white border border-indigo-600 transition-colors flex items-center justify-center bg-white text-background gap-2  dark:hover:bg-[black] dark:hover:text-white font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32 mb-12'>
				Homepage
			</Link>
		</div>
	);
};

export default DrupalCards;
