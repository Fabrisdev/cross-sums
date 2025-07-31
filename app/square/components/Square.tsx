"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSquare } from "../hooks/useSquare";

type Props = {
	children: React.ReactNode;
	className?: string;
	id: number;
};

export function Square({ children, className, id }: Props) {
	const { type } = useSquare({ id });
	const [marked, setMarked] = useState(false);
	const [visible, setVisible] = useState(true);

	function setInvisible() {
		setVisible(false);
	}

	function handleDiscardSquare() {
		if (type === "VALID") return toast.error("¡Ese va!");
		setInvisible();
	}

	function handleMarkSquare(event: React.MouseEvent) {
		event.preventDefault();
		if (type === "INVALID") return toast.error("¡Ese no es!");
		setMarked(true);
	}

	return (
		<button
			type="button"
			onClick={handleDiscardSquare}
			onContextMenu={handleMarkSquare}
			className={`bg-white text-black aspect-square flex justify-center items-center cursor-pointer hover:bg-blue-200 w-12 ${className} ${marked && "bg-red-400!"}`}
		>
			{visible ? children : ""}
		</button>
	);
}
