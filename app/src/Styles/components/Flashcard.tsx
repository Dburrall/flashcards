import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Flash.css";

const Flashcard = ({ front, back, className }) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			className={`perspective ${className || ""}`}
			onClick={() => setFlipped(!flipped)}>
			<motion.div
				className='relative w-full h-full transition-transform duration-500 preserve-3d'
				animate={{ rotateY: flipped ? 180 : 0 }}>
				{/* Front Side */}
				<div className='absolute w-full h-full backface-hidden flex items-center justify-center p-4 bg-white rounded-lg shadow-md'>
					{front}
				</div>

				{/* Back Side */}
				<div className='absolute w-full h-full backface-hidden flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md rotate-y-180'>
					{back}
				</div>
			</motion.div>
		</div>
	);
};

export default Flashcard;
