const Skeleton = () => {
	return (
		<div className="animate-pulse space-y-4">
			{/* Skeleton Teaser */}
			<div className="h-8 w-1/3 rounded-md bg-gray-200"></div>

			{/* Loading Cards */}
			<div className="space-y-4">
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className="flex items-center space-x-4">
						{/* Image Placeholder */}
						<div className="size-16 rounded-lg bg-gray-300"></div>

						{/* Text Placeholders */}
						<div className="flex-1 space-y-2">
							<div className="h-4 w-1/2 rounded bg-gray-300"></div>
							<div className="h-4 w-3/4 rounded bg-gray-300"></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skeleton;
