import React from "react";
import Link from "next/link";

const LinuxPage = () => {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<h1 className='text-3xl text-[#0db7ed] bold'>Linux</h1>

				<div className='flex gap-4 items-center flex-col sm:flex-row'>
					<Link
						href='/Linux/LinuxBeginner'
						className='rounded-full border border-[#0db7ed] transition-colors flex items-center justify-center hover:bg-[#0db7ed] dark:hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto '>
						Beginner
					</Link>
					<Link
						className='pointer-events-none rounded-full border border-[#F97316] transition-colors flex items-center justify-center hover:bg-[#F97316]  hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto '
						href='/Linux/LinuxIntermediate'>
						Intermediate{" "}
						<span className='text-xs ml-[0.2rem] text-amber-300'>
							Coming soon!
						</span>
					</Link>

					<Link
						href='/'
						className='rounded-full border border-indigo-600  transition-colors flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto '>
						Homepage
					</Link>
				</div>
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
		</div>
	);
};

export default LinuxPage;
