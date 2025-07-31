"use client";

import { NumberTextbox } from "@/app/square/components/NumberTextbox";
import { useBoard } from "../hooks/useBoard";
import { getHorizontalNumbers } from "../logic/board";

export function BoardHorizontalNumbers() {
	const { validNumbersOnlyBoard } = useBoard();
	const horizontalNumbers = getHorizontalNumbers(validNumbersOnlyBoard, 8);
	const horizontalNumbersMapped = horizontalNumbers.map((item, index) => (
		<NumberTextbox
			key={index}
			className="hover:bg-white! cursor-auto! rounded-full"
		>
			{item}
		</NumberTextbox>
	));
	return (
		<div className="bg-blue-400 rounded-2xl rounded-l-none flex gap-1 p-2 pr-0">
			{horizontalNumbersMapped}
		</div>
	);
}
