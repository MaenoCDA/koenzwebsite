import React from 'react';

interface CodeBlockProps {
	code: Record<string, any>;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
	return <pre>{JSON.stringify(code, null, 2)}</pre>;
};

export default CodeBlock;
