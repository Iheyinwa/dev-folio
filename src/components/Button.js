export default function Button({ title, onClick }) {
	return (
		<button className="cta flex items-center pb-4" onClick={onClick}>
			<span className="font-noir">{title}</span>
			<svg viewBox="0 0 13 10" height="10px" width="15px">
				<path d="M1,5 L11,5" />
				<polyline points="8 1 12 5 8 9" />
			</svg>
		</button>
	);
}
