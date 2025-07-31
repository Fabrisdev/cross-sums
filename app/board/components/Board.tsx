"use client";

import { Square } from "@/app/square/components/Square";
import { useBoard } from "../hooks/useBoard";

export function Board() {
	const { board, indicesTable } = useBoard();
	const boardMapped = board.map((item, index) => (
		<Square
			key={index}
			className={indicesTable[index] !== 0 ? "bg-red-400!" : ""}
		>
			{item}
		</Square>
	));
	return <div className="grid grid-cols-8 gap-1 mt-2 ml-2">{boardMapped}</div>;
}
