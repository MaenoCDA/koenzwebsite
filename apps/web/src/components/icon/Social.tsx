import React, { FC } from 'react';
import Discord from './socials/Discord';
import Facebook from './socials/Facebook';
import Instagram from './socials/Instagram';
import LinkedIn from './socials/LinkedIn';
import Twitter from './socials/Twitter';
import Telegram from './socials/Telegram';
import TikTok from './socials/TikTok';
import YouTube from './socials/YouTube';

export enum SOCIAL_CHANNELS {
	DISCORD = 'discord',
	FACEBOOK = 'facebook',
	INSTAGRAM = 'instagram',
	LINKEDIN = 'linkedin',
	TELEGRAM = 'telegram',
	TWITTER = 'twitter',
	YOUTUBE = 'youtube',
	TIKTOK = 'tiktok',
}

const socialIconMap = new Map<SOCIAL_CHANNELS, FC<{ className?: string }>>([
	[SOCIAL_CHANNELS.DISCORD, Discord],
	[SOCIAL_CHANNELS.FACEBOOK, Facebook],
	[SOCIAL_CHANNELS.INSTAGRAM, Instagram],
	[SOCIAL_CHANNELS.LINKEDIN, LinkedIn],
	[SOCIAL_CHANNELS.TELEGRAM, Telegram],
	[SOCIAL_CHANNELS.TWITTER, Twitter],
	[SOCIAL_CHANNELS.YOUTUBE, YouTube],
	[SOCIAL_CHANNELS.TIKTOK, TikTok],
]);

const SocialIcon = ({ className, channel }: { className?: string; channel: SOCIAL_CHANNELS }) => {
	const IconComponent = socialIconMap.get(channel);

	if (!IconComponent) {
		return null;
	}

	return <IconComponent className={className} />;
};

export default SocialIcon;
