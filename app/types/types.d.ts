export {};

declare global {
	interface Window {
		showValids: () => void;
	}
	interface WindowEventMap {
		"show-valids": Event;
	}
}
