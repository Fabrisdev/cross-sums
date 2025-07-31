import { useBoard } from "@/app/board/hooks/useBoard";
import type { Square } from "../types";

type Props = {
	id: number;
};

export function useSquare({ id }: Props): Square {
	const { indicesTable } = useBoard();
	const type = indicesTable[id] !== 0 ? "VALID" : "INVALID";

	return { type };
}
