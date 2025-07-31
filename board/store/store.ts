import { create } from "zustand";
import { createBoard } from "../logic/board";
import type { Board } from "../types";

type Store = {
	board: Board;
	actions: Actions;
};

type Actions = {
	startGame: () => void;
};

export const useBoardStore = create<Store>()((set) => ({
	board: Array.from({ length: 64 }, () => ({ value: 0, valid: false })),
	actions: {
		startGame: () => {
			set({
				board: createBoard(),
			});
		},
	},
}));
