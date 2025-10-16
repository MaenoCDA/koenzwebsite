'use client';

import Pagination from '~/src/components/input/Pagination';
import Tags from '~/src/components/input/Tags';
import Teaser from '~/src/components/main/teaser/Teaser';
import { Meta } from '~/types/schemas';

const ClientOverview = ({ records, meta }: { records: any[]; meta: Meta }) => {
	return (
		<div className="component-margin">
			<div className="container">
				{meta?.tags && (
					<div className="mb-6 flex flex-wrap gap-4">
						<Tags tags={meta.tags} />
					</div>
				)}
			</div>

			<div className="container">
				<div className="row gap-y-5">
					{records.map((record) => (
						<div key={record.id} className="col-span-full md:col-span-6 lg:col-span-4">
							<Teaser {...record} button={{ link: { href: `${record.route}`, target: '_self' }, label: 'Lees meer' }} />
						</div>
					))}
				</div>
				<Pagination pagination={meta.pagination} />
			</div>
		</div>
	);
};

export default ClientOverview;
