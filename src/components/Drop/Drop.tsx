import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Drop = ({
	delay,
	x,
	size,
}: {
	delay: number;
	x: number;
	size: number;
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 1000,
		},
	});
	const top = interpolate(drop, [0, 1], [-10, 110]);
  // If (top === -2) return null;
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: 100,
				position: 'absolute',
				left: x.toString() + '%',
				top: top.toString() + '%',
				transform: `scale(${size})`,
			}}
		>
			<rect width="40" height="40" rx="20" fill="#E7E7E7" />
			<path
				d="M12.5 29C12.1 29 11.75 28.85 11.45 28.55C11.15 28.25 11 27.9 11 27.5H12.5V29ZM11 25.3V23.225H12.5V25.3H11ZM11 21.025V18.95H12.5V21.025H11ZM11 16.775V14.7H12.5V16.775H11ZM11 12.5C11 12.1 11.15 11.75 11.45 11.45C11.75 11.15 12.1 11 12.5 11V12.5H11ZM14.7 25.3V14.7H25.3V25.3H14.7ZM14.7 29V27.5H16.775V29H14.7ZM14.7 12.5V11H16.775V12.5H14.7ZM16.2 23.8H23.8V16.2H16.2V23.8ZM18.975 29V27.5H21.05V29H18.975ZM18.975 12.5V11H21.05V12.5H18.975ZM23.225 29V27.5H25.3V29H23.225ZM23.225 12.5V11H25.3V12.5H23.225ZM27.5 29V27.5H29C29 27.9 28.85 28.25 28.55 28.55C28.25 28.85 27.9 29 27.5 29ZM27.5 25.3V23.225H29V25.3H27.5ZM27.5 21.025V18.95H29V21.025H27.5ZM27.5 16.775V14.7H29V16.775H27.5ZM27.5 12.5V11C27.9 11 28.25 11.15 28.55 11.45C28.85 11.75 29 12.1 29 12.5H27.5Z"
				fill="black"
			/>
		</svg>
	);
};
