"use client";

import { NumberTextbox } from "@/square/components/NumberTextbox";
import { useBoard } from "../hooks/useBoard";
import { getVerticalNumbers } from "../logic/board";

export function BoardVerticalNumbers() {
	const { validNumbersOnlyBoard } = useBoard();
	const verticalNumbers = getVerticalNumbers(validNumbersOnlyBoard);
	const verticalNumbersMapped = verticalNumbers.map((item, index) => (
		<NumberTextbox
			key={index}
			className="rounded-full hover:bg-white! cursor-auto!"
		>
			{item}
		</NumberTextbox>
	));
	return (
		<div className="bg-blue-400 rounded-2xl rounded-t-none flex flex-col gap-1 pt-2 pl-2 pr-2">
			{verticalNumbersMapped}
		</div>
	);
}
