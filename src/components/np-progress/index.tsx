import React from 'react';
import { useNProgress } from '@tanem/react-nprogress';
import NpContainer from 'components/np-container';
import NpBar from 'components/np-bar';

// ==========================================:
const NpProgress: React.FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
	const { animationDuration, isFinished, progress } = useNProgress({
		isAnimating,
	});

	return (
		<NpContainer animationDuration={animationDuration} isFinished={isFinished}>
			<NpBar animationDuration={animationDuration} progress={progress} />
		</NpContainer>
	);
};

export default NpProgress;
