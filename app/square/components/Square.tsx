"use client";

import { useState } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Square({ children, className }: Props) {
	const [visible, setVisible] = useState(true);

	function toggleVisibility() {
		setVisible(!visible);
	}

	return (
		<button
			type="button"
			onClick={toggleVisibility}
			className={`bg-white text-black aspect-square flex justify-center items-center cursor-pointer hover:bg-blue-200 ${className} w-12`}
		>
			{visible ? children : ""}
		</button>
	);
}
