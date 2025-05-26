import React from "react";
import Link from "next/link";

const newComponent = () => {
	return (
		<body className='mx-auto'>
			<h1>Language/Framework</h1>
			<h2>Subclass</h2>

			<h3>Heading3</h3>

			<p></p>

			<h4>Assignment/Extra-Links</h4>
			<div>
				<li></li>
			</div>

			<Link
				href='/'
				className='rounded-full white border border-indigo-600 transition-colors flex items-center justify-center bg-white text-background gap-2  dark:hover:bg-[black] dark:hover:text-white font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32 mb-12'>
				Homepage
			</Link>
		</body>
	);
};

export default newComponent;
