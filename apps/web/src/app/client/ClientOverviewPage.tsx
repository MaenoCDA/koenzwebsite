'use client';

import Pagination from '~/src/components/input/Pagination';
import Tags from '~/src/components/input/Tags';
import Teaser from '~/src/components/main/teaser/Teaser';
import { Meta } from '~/types/schemas';

const ClientOverviewPage = ({ tags, records, meta }: { tags: any[]; records: any[]; meta: Meta }) => {
	return (
		<div>
			<div>{meta.tags && <Tags tags={meta.tags} />}</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{records.map((record) => (
					<Teaser key={record.id} {...record} button={{ link: { href: record.route } }} />
				))}
			</div>
			<div>
				<Pagination pagination={meta.pagination} />
			</div>
		</div>
	);
};

export default ClientOverviewPage;
