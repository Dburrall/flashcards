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
				Drupal Basics
			</h1>
			<div className='flex justify-center items-center '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>What is a view?</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									a listing or presentation of content from the website's
									database, allowing users to create customized and interactive
									displays of data.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://understanddrupal.com/blog/what-view-drupal-how-do-they-work/'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a taxonomy?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								Taxonomy is used to classify website content
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a module?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									an add-on or extension that expands the core functionality of
									the website.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/user_guide/en/understanding-modules.html'
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
								What is a theme?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									A theme is a set of files that define the visual look and feel
									of your site.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/user_guide/en/understanding-themes.html'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a content type?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Defines the structure and fields for different types of
									content within a website
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/7/understanding-drupal/content-types'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a block?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Blocks are individual pieces of your site’s web page layout.
									Examples of blocks include the Who’s online listing, the main
									navigation menu, and the breadcrumb trail.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/user_guide/en/block-concept.html'
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
							<h2 className='text-xl font-bold text-black '>What is a View?</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									A View in Drupal is essentially a query builder. You can use
									it to fetch content, filter & sort it and display it.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/7/modules/views/what-are-views'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								How do you enable or disable a module?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Go to Extend (/admin/modules) and check/uncheck the module,
									then click "Install"/"Uninstall".
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/extending-drupal/uninstalling-modules'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a drush command?{" "}
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Short for "Drupal Shell" it's used to automate common tasks
									like: Clearing cache, updating modules & running database
									updates
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/develop/development-tools/drush'
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
								What are Permissions?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									The ability to do actions on your site (including viewing
									content, editing content, and changing configuration){" "}
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/user_guide/en/user-concept.html'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>What are Roles?</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Rather than assigning individual permissions directly to each
									user, permissions are grouped into roles.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.drupal.org/docs/user_guide/en/user-concept.html'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>What is a node?</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									A piece of content, such as a page or article, stored as an
									individual entity.
								</p>
							</div>
						}
					/>
				</div>
			</div>
			{/* START OF GENERAL QUESTIONS */}
			{/* <h2 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-pink-500'>
				General Drupal Questions
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

export default DrupalCards;
