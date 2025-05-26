import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function StudyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen bg-gray-100 dark:bg-gray-200 text-gray-900 dark:text-black px-6 py-10'>
			<header className='flex flex-col mx-auto  md:items-center md:justify-center  text-center gap-6 px-4'>
				<Image
					className='flex justify-center mx-auto md:margin-0'
					src='/study-guide.svg'
					alt='image of a study guide'
					width={100}
					height={200}
				/>
				<h1 className='text-4xl font-bold'>Study Guide</h1>
				<div className='text-center'></div>
			</header>

			<section className='max-w-3xl mx-auto'>{children}</section>

			<div className='text-center'>
				<Link
					href='/'
					className='rounded-full border border-indigo-600 transition-colors flex items-center justify-center bg-white text-gray-900 dark:bg-black dark:text-white dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 w-40 mx-auto mt-8'>
					Homepage
				</Link>
			</div>
		</div>
	);
}
