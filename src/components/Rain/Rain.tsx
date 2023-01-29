import {random} from 'remotion';
import {Drop} from '../Drop/Drop';

export const Rain = () => {
	const rainDrops = new Array(200).fill(true).map((_, i) => {
		const x = random('x' + i) * 100;
		const delay = random('delay' + i) * 120;
		const size = random('size' + i) * 4;
		return {x, delay, size};
	});
	return (
		<>
			{rainDrops.map((r) => (
				<Drop delay={r.delay} x={r.x} size={r.size} />
			))}
		</>
	);
};
