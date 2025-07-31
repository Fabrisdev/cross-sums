type Props = {
	children: React.ReactNode;
};

export function Game({ children }: Props) {
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<div className="bg-blue-400 rounded-tl-2xl"></div>
			{children}
		</div>
	);
}
