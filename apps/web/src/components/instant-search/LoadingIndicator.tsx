import React from 'react';
import LoadingSvg from '../shapes/Loading';

const LoadingIndicator = () => (
	<div className="flex min-h-24 items-center justify-center py-3">
		<p>
			<LoadingSvg className="size-8 fill-primary" />
		</p>
	</div>
);

export default LoadingIndicator;
