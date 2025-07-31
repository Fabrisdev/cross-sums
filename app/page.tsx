import { Board } from "./board/components/Board";
import { BoardHorizontalNumbers } from "./board/components/BoardHorizontalNumbers";
import { BoardVerticalNumbers } from "./board/components/BoardVerticalNumbers";
import { Game } from "./board/components/Game";
import { title } from "./fonts/title";

export default function Home() {
	return (
		<main className="flex justify-center items-center flex-col">
			<h1 className={`${title.className} text-9xl`}>CROSS SUMS</h1>
			<Game>
				<BoardHorizontalNumbers />
				<BoardVerticalNumbers />
				<Board />
			</Game>
		</main>
	);
}
