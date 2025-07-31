"use client";

import { useEffect } from "react";
import { useBoardStore } from "../store/store";

export function useBoard() {
	const board = useBoardStore((state) => state.board);
	const { startGame } = useBoardStore((state) => state.actions);
	const validNumbersOnlyBoard = board.map((item) => {
		if (item.valid) return item;
		return { valid: false, value: 0 };
	});

	useEffect(() => {
		startGame();
	}, []);

	return { board, validNumbersOnlyBoard };
}
