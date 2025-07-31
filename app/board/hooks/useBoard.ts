"use client";

import { useEffect } from "react";
import { createBoard, generateRandomIndices } from "../logic/board";
import { useBoardStore } from "../store/store";

export function useBoard() {
	const board = useBoardStore((state) => state.board);
	const indicesTable = useBoardStore((state) => state.indicesTable);
	const updateBoard = useBoardStore((state) => state.updateBoard);
	const updateIndices = useBoardStore((state) => state.updateIndices);

	useEffect(() => {
		const newBoard = createBoard({
			boardSize: 8,
			distributionBias: 1,
		});
		updateBoard(newBoard);
		const indicesBoard = generateRandomIndices({
			board: newBoard,
		});
		updateIndices(indicesBoard);
	}, []);

	return { board, indicesTable };
}
