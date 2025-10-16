import ReactPlayer from 'react-player';
import Icon from '../icon/Icon';
import { Video as VideoInterface } from '~/types/schemas/main';
import { classNamesTailwind } from '~/utils/helpers';

interface VideoProps extends VideoInterface {
	className?: string;
}

const Video = ({ className, ...props }: VideoProps) => {
	const { video, caption, placeholder } = props;

	if (!video || !placeholder) {
		return <></>;
	}

	return (
		<div className="component-margin container">
			<div className="row">
				<div
					className={classNamesTailwind(
						'col-span-full aspect-video size-full overflow-hidden rounded-sm border border-stroke lg:col-span-10 lg:col-start-2',
						className
					)}
				>
					<ReactPlayer
						light={placeholder?.url}
						playing
						playIcon={
							<span className="flex size-12 items-center justify-center rounded-full border-2 border-white md:size-20 md:border-4">
								<Icon iconName="PLAY" className="size-8 fill-primary" />
							</span>
						}
						width="100%"
						height="100%"
						url={video.url}
					/>
				</div>
			</div>
		</div>
	);
};

export default Video;
