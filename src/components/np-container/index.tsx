import React from 'react';

// ==========================================:
const NpContainer: React.FC<{
	animationDuration: number;
	isFinished: boolean;
}> = ({ animationDuration, children, isFinished }) => (
	<div
		style={{
			opacity: isFinished ? 0 : 1,
			pointerEvents: 'none',
			transition: `opacity ${animationDuration}ms linear`,
		}}
	>
		{children}
	</div>
);

export default NpContainer;
