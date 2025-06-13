import React from "react";

import Link from "next/link";

const ReactPage = () => {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<h1 className='text-3xl bold text-[#f7df1e] '>Javascript</h1>

				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<Link
						href='/Javascript/JavascriptBeginner'
						className='rounded-full border border-[#f7df1e] transition-colors flex items-center justify-center hover:bg-[#5B9BD5] dark:hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'>
						Beginner
					</Link>
					<Link
						className='rounded-full border pointer-events-none  border-[#F97316] transition-colors flex items-center justify-center hover:bg-[#F97316]  hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='/Javascript/JavascriptIntermediate'>
						Intermediate (coming soon!)
					</Link>

					<Link
						className='rounded-full border pointer-events-none  border-[#10B981] transition-colors flex items-center justify-center hover:bg-[#10B981] dark:hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'>
						Study sheet (coming soon!)
					</Link>

					<Link
						href='/'
						className='rounded-full border border-indigo-600  transition-colors flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'>
						Homepage
					</Link>
				</div>
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
		</div>
	);
};

export default ReactPage;
