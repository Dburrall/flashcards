import Link from "next/link";

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16  sm:max-w-2.5 md:max-w-none font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<h1 className='text-2xl sm: pl-4 md:pl-0'>
					Fullstack Flash Cards Online
				</h1>
				<ol className='list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
					<li className='mb-1'>Practice & Sharpen your skills</li>
					<li className='mb-1'>Pick a language, CMS, or Framework</li>
					<li className='tracking-[-.01em]'>
						Study your way to a Full-Stack master
					</li>
				</ol>

				<div className='flex gap-4 items-center flex-col sm:flex-row  md:grid md:grid-cols-3 md:grid-rows-2 lg:flex-row'>
					<a
						href='/React'
						className='rounded-full  border border-[#61dafb] hover:border-[#61dafb] transition-colors flex items-center justify-center hover:bg-[#61dafb] dark:hover:text-black  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'>
						React
					</a>
					<a
						className='rounded-full border border-[#f7df1e] transition-colors flex items-center justify-center hover:bg-[#f7df1e] dark:hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='/Javascript'>
						Javascript
					</a>

					<a
						className='rounded-full  border border-[#0077b5] transition-colors flex items-center justify-center hover:bg-[#0077b5]  dark:hover:text-black hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='/Drupal'>
						Drupal
					</a>
					<a
						className='rounded-full pointer-events-none   border border-[#8892BF] transition-colors flex items-center justify-center hover:bg-[#8892BF]  dark:hover:text-white hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='/PHP'>
						PHP
						<span className='text-xs ml-[0.2rem] text-amber-300'>
							Coming soon!
						</span>
					</a>
					<a
						className='rounded-full pointer-events-none   border border-[#43853d] transition-colors flex items-center justify-center hover:bg-[#43853d]  dark:hover:text-white hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
						href='/Node'>
						Node
						<span className='text-xs ml-[0.2rem] text-amber-300'>
							Coming soon!
						</span>
					</a>
				</div>
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
		</div>
	);
}
