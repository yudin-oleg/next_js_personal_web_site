// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
	const { to, subject, text } = await request.json();

	let transporter = nodemailer.createTransport({
		host: "smtp.yandex.ru",
		port: 465,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
		secure: true, // Use TLS/SSL
	});
	console.log(process.env.EMAIL_USER);
	console.log(process.env.EMAIL_PASS);
	try {
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to,
			subject,
			text,
		});

		return new Response(
			JSON.stringify({ message: "Email sent successfully!" }),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error); // Log detailed error
		return new Response(
			JSON.stringify({ message: "Failed to send email", error: error.message }),
			{ status: 500 }
		);
	}
}
