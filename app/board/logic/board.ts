import type { Board } from "../types";

export function createBoard({
	boardSize = 8 * 8,
	maxNumberInBoard = 9,
	distributionBias = 2,
}) {
	return Array.from({ length: boardSize }, () =>
		Math.ceil(Math.random() ** distributionBias * maxNumberInBoard),
	);
}

type RandomIndicesOptions = {
	board: Board;
	minimumAmount?: number;
	maximumAmount?: number;
};
export function generateRandomIndices({
	board,
	minimumAmount = 10,
	maximumAmount = 20,
}: RandomIndicesOptions) {
	if (board.length === 0) return [];
	const indices = Array.from(board, (_, i) => i);
	const multiplierMaxAmount = maximumAmount - minimumAmount;
	const amount = Math.ceil(Math.random() * multiplierMaxAmount + minimumAmount);
	const shuffledIndices = fisherYates(indices);
	const generatedIndices = shuffledIndices.slice(0, amount);
	return board.map((item, index) => {
		if (generatedIndices.includes(index)) return item;
		return 0;
	});
}

export function getHorizontalNumbers(board: Board, size: number) {
	if (board.length === 0) return [];
	const numbers = [];
	for (let x = 0; x < size; x++) {
		let sum = 0;
		for (let y = 0; y < size; y++) {
			sum += board[y * size + x];
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
			sum += board[x * size + y];
		}
		numbers.push(sum);
	}

	return numbers;
}

function fisherYates<T>(array: T[]): T[] {
	const arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
