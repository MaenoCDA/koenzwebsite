export interface Button {
	id?: number;
	label: string;
	link: Link;
}

interface Link {
	target: '_self' | '_blank';
	href: string;
}
