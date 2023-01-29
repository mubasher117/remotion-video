import {random, useCurrentFrame, useVideoConfig} from 'remotion';
import {Drop} from './components/Drop/Drop';
import { Rain } from './components/Rain/Rain';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				fontSize: 120,
				flex: 1,
				backgroundColor: 'red',
			}}
		>
			Hello Edureka! Info: {fps} | {durationInFrames} | {frame}
			<Rain/>
			{/* <Drop delay={4} size={5} x="3" /> */}
		</div>
	);
};
