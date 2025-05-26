// app/react-study/page.tsx

export default function ReactStudyHome() {
	return (
		<div>
			<h2 className='text-2xl font-semibold mb-4'>React Study Overview</h2>
			<p>Welcome to the React Study section. Choose a topic to begin:</p>

			<ul className='list-disc pl-6 mt-4 space-y-2'>
				<li>
					<a
						className='text-indigo-500 hover:underline'
						href='/react-study/beginner'>
						Beginner
					</a>
				</li>
				<li>
					<a
						className='text-indigo-500 hover:underline'
						href='/react-study/hooks'>
						Hooks
					</a>
				</li>
				<li>
					<a
						className='text-indigo-500 hover:underline'
						href='/react-study/state-management'>
						State Management
					</a>
				</li>
			</ul>
		</div>
	);
}
