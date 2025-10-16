'use client';

import { useContext } from 'react';
import FlexContentComponents from './FlexContent';
import WebsiteContext from '~/src/contexts/WebsiteContext';
import { FlexContent } from '~/types/schemas/main';

const FixedContentComponents = ({ uid }: { uid: string }) => {
	const { fixedBlocks } = useContext(WebsiteContext);

	if (!fixedBlocks) {
		return <></>;
	}

	const filterBlocksByRelation = (fixedBlocks: any[], uid: string) => {
		return fixedBlocks.filter((block) => block.relation === uid).flatMap((block) => block.blocks);
	};

	if (!filterBlocksByRelation) {
		return <></>;
	}

	return <FlexContentComponents components={filterBlocksByRelation(fixedBlocks, uid) as FlexContent} />;
};

export default FixedContentComponents;
