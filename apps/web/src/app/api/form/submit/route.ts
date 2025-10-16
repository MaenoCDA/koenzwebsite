import { NextResponse } from 'next/server';
import { CMS_BASE_URL } from '~/config';

export async function POST(request: Request) {
	try {
		// Parse JSON body from the request
		const body = await request.json();
		const response = await fetch(`${CMS_BASE_URL}/api/api-forms/submission/post`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// Return a success response
		return NextResponse.json({
			success: true,
			message: 'Form submitted successfully!',
		});
	} catch (error) {
		console.error('Error submitting form:', error);
		return NextResponse.json(
			{
				success: false,
				error: 'Internal server error. Please try again later.',
			},
			{ status: 500 }
		);
	}
}
