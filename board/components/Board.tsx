"use client";

import { Square } from "@/app/square/components/Square";
import { useBoard } from "../hooks/useBoard";

export function Board() {
	const { board } = useBoard();
	const boardMapped = board.map((item, index) => (
		<Square key={index} id={index}>
			{item.value}
		</Square>
	));
	return <div className="grid grid-cols-8 gap-1 mt-2 ml-2">{boardMapped}</div>;
}
