import { create } from "zustand";
import type { Board } from "../types";

type Store = {
	board: Board;
	indicesTable: Board;
	updateBoard: (board: Board) => void;
	updateIndices: (indices: Board) => void;
};

export const useBoardStore = create<Store>()((set) => ({
	board: [],
	indicesTable: [],
	updateBoard: (board) => {
		set({ board });
	},
	updateIndices: (indices) => {
		set({ indicesTable: indices });
	},
}));
