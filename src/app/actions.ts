"use server";

import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
	message: string;
	errors?: {
		name?: string[];
		email?: string[];
		message?: string[];
	};
	success: boolean;
};

export async function submitContactForm(
	prevState: ContactFormState,
	formData: FormData
): Promise<ContactFormState> {
	const validatedFields = contactSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			message: "Validation failed. Please check your input.",
			errors: validatedFields.error.flatten().fieldErrors,
			success: false,
		};
	}

	// Send email using Resend
	try {
		const { Resend } = await import("resend");
		const resend = new Resend(process.env.RESEND_API_KEY);

		const recipientEmail =
			process.env.RECIPIENT_EMAIL || "natanamstar69@gmail.com";

		await resend.emails.send({
			from: "onboarding@resend.dev", // Use your verified domain or Resend's test domain
			to: recipientEmail,
			subject: `${validatedFields.data.name} trying to reach out through your website`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedFields.data.name}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedFields.data.message}</p>
      `,
			replyTo: validatedFields.data.email,
		});

		return {
			message: "Message sent successfully! Thank you for reaching out.",
			success: true,
		};
	} catch (error) {
		console.error("Failed to send email:", error);
		return {
			message: "Failed to send message. Please try again later.",
			success: false,
		};
	}
}
