import type { Board } from "../types";
import {
	boardSize,
	distributionBias,
	maxNumberInBoard,
	validNumbersBias,
} from "./config";

export function createBoard(): Board {
	return Array.from({ length: boardSize ** 2 }, () => ({
		value: Math.ceil(Math.random() ** distributionBias * maxNumberInBoard),
		valid: Math.random() > validNumbersBias,
	}));
}

export function getHorizontalNumbers(board: Board, size: number) {
	if (board.length === 0) return [];
	const numbers = [];
	for (let x = 0; x < size; x++) {
		let sum = 0;
		for (let y = 0; y < size; y++) {
			sum += board[y * size + x].value;
		}
		numbers.push(sum);
	}

	return numbers;
}

export function getVerticalNumbers(board: Board, size: number) {
	if (board.length === 0) return [];
	const numbers = [];
	for (let x = 0; x < size; x++) {
		let sum = 0;
		for (let y = 0; y < size; y++) {
			sum += board[x * size + y].value;
		}
		numbers.push(sum);
	}

	return numbers;
}
