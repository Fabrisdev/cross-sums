import { useBoard } from "@/app/board/hooks/useBoard";

type Props = {
	id: number;
};

export function useSquare({ id }: Props) {
	const { board } = useBoard();
	const { valid } = board[id];

	return { valid };
}
