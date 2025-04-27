// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";

import Flashcard from "@/app/src/Styles/components/Flashcard";

import Link from "next/link";

export default function FlashcardPage() {
	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-50'>
			<Flashcard
				front={<h2 className='text-xl font-bold'>What is React?</h2>}
				back={
					<p className='text-md text-gray-700'>
						A JavaScript library for building user interfaces.
					</p>
				}
			/>
		</div>
	);
}
