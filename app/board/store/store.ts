import { create } from "zustand";
import { createBoard } from "../logic/board";
import type { Board } from "../types";

type Store = {
	board: Board;
	actions: Actions;
};

type Actions = {
	startGame: (options: {
		boardSize?: number;
		maxNumberInBoard?: number;
		distributionBias?: number;
		minimumValidNumbers?: number;
		maximumValidNumbers?: number;
	}) => void;
};

export const useBoardStore = create<Store>()((set) => ({
	board: [],
	indicesTable: [],
	actions: {
		startGame: () => {
			set({
				board: createBoard(),
			});
		},
	},
}));
