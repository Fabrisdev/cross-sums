"use client";

import { Square } from "@/app/square/components/Square";
import { useBoard } from "../hooks/useBoard";
import { getVerticalNumbers } from "../logic/board";

export function BoardVerticalNumbers() {
	const { indicesTable } = useBoard();
	const verticalNumbers = getVerticalNumbers(indicesTable, 8);
	const verticalNumbersMapped = verticalNumbers.map((item, index) => (
		<Square key={index} className="rounded-full hover:bg-white! cursor-auto!">
			{item}
		</Square>
	));
	return (
		<div className="bg-blue-400 rounded-2xl rounded-t-none flex flex-col gap-1 pt-2 pl-2 pr-2">
			{verticalNumbersMapped}
		</div>
	);
}
