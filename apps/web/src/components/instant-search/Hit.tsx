import React from 'react';
import Link from 'next/link';
import { stringifyHit } from '~/utils/helpers';

const Hit = ({ hit, query }: { hit: any; query: any }) => {
	return (
		<Link href={hit.route} target="_self">
			<h3 dangerouslySetInnerHTML={{ __html: hit._snippetResult ? stringifyHit(hit._snippetResult.title, query) : hit.title }} />
			<p
				dangerouslySetInnerHTML={{
					__html: hit._snippetResult ? stringifyHit(hit._snippetResult?.description, query) : stringifyHit(hit.description, query),
				}}
			/>
		</Link>
	);
};

export default Hit;
