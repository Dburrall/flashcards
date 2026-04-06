import { Sandpack } from "@codesandbox/sandpack-react";

export default function ReactPractice() {
	return (
		<Sandpack
			template='react'
			options={{
				showNavigator: true,
				showTabs: true,
				showLineNumbers: true,
			}}
			files={{
				"/App.js": `
import React, { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    console.log("Hello from useEffect!");
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Practice makes perfect</span>  
        </h2>
      </div>
    </div>
  );
}
`,
			}}
		/>
	);
}
