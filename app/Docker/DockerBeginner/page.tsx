// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import Flashcard from "@/app/src/Styles/components/Flashcard";
import Link from "next/link";

const DockerBeginner = () => {
	return (
		<div className='bg-[#03071280]  mt-12'>
			<h1 className='flex justify-center mb-6 mt-6 font-bold text-3xl text-[#0db7ed]'>
				The Basics
			</h1>
			<div className='flex justify-center items-center '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>What is Docker?</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700 '>
									an open-source platform that allows developers to build,
									deploy, and run applications in lightweight, standardized
									environments called containers.
								</p>{" "}
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a Container?
							</h2>
						}
						back={
							<p className='text-md text-gray-700'>
								an isolated environment that packages an application along with
								all its dependencies.
							</p>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is Docker Compose?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									a tool that allows you to define and run multi-container
									applications using a single YAML file.
								</p>

								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://docs.docker.com/compose/'
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
								What is Docker registery?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									An image registry is a centralized location for storing and
									sharing your container images.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a Docker Image?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									An image is a static blueprint. It contains everything needed
									to create a running environment
								</p>
							</div>
						}
					/>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a Dockerfile?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									A Dockerfile is a text file with instructions Docker follows
									to build an image.
								</p>
								<Image
									src='/DockerFile.png'
									alt='Image of a Docker File'
									width={300}
									height={500}
								/>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/'
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
				Docker
			</h2>
			<div className='flex justify-center items-center mt-10 '>
				<div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is a Cgroup used for?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									To limit and isolate the usage of different containers such as
									CPU usage.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html'
									target='_blank'>
									Explanation
								</a>
							</div>
						}
					/>

					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What is the Docker daemon?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									The Docker daemon (dockerd) is the background service that
									does the actual work: building images, running containers,
									managing networks and volumes. It listens for API requests and
									carries them out.
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
					<Flashcard
						front={
							<h2 className='text-xl font-bold text-black '>
								What are Volumes in Docker?
							</h2>
						}
						back={
							<div className='block'>
								<p className='text-md text-gray-700'>
									Volumes are persistent data stores for containers, created and
									managed by Docker.
								</p>
								<a
									className='text-blue-600 underline hover:text-blue-800'
									href='https://docs.docker.com/engine/storage/volumes/'
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
				className='rounded-full white border border-indigo-600 transition-colors flex items-center justify-center  hover:bg-indigo-600 gap-2  text-white font-medium text-sm sm:text-base h-10 md:w-42 mx-auto mt-8 sm:h-12 px-4 sm:px-5 w-32 mb-12'>
				Homepage
			</Link>
		</div>
	);
};

export default DockerBeginner;
