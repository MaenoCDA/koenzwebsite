'use client';

import { createContext } from 'react';
import { FlexContent } from '~/types/schemas/main';

type FlexContentContextProps = {
	flexContent: FlexContent;
};

export default createContext<FlexContentContextProps>({
	flexContent: [],
});
