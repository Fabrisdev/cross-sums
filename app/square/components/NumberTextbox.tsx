type Props = {
	children: React.ReactNode;
	className?: string;
};

export function NumberTextbox({ children, className }: Props) {
	return (
		<p
			className={`bg-white text-black aspect-square flex justify-center items-center cursor-pointer hover:bg-blue-200 w-12 ${className}`}
		>
			{children}
		</p>
	);
}
