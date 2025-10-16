import Icon from '../icon/Icon';

const DraftMode = () => {
	return (
		<div className="fixed bottom-8 left-8">
			<div className="flex max-w-sm items-center rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 p-2 pr-8 text-white shadow-xl backdrop-blur-lg">
				<div className="flex items-center space-x-1">
					<button className="flex items-center justify-center rounded-full p-2 transition duration-300 ease-in-out hover:bg-neutral-600 focus:bg-neutral-600 focus:ring-2 focus:ring-neutral-900">
						<Icon iconName="EYE" className="size-4 fill-white" />
					</button>
				</div>
				<div className="mx-2 h-6 border-l border-neutral-600"></div>
				<div className="text-xs">Preview</div>
			</div>
		</div>
	);
};

export default DraftMode;
