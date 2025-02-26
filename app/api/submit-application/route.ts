import { NextResponse } from "next/server";
import { Resend } from "resend";
import CompanyEmail from "@/components/emails/company-email";
import ApplicantEmail from "@/components/emails/application-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const jobTitle = formData.get("jobTitle") as string;
  const coverLetter = formData.get("coverLetter") as string;
  const resume = formData.get("resume") as File;
  const qualification = formData.get("qualification") as File;

  try {
    // Send email to the applicant
    await resend.emails.send({
      from: "Trickal Holdings <no-reply@trickalholdings.com>",
      to: email,
      subject: "Application Received - Trickal Holdings",
      react: ApplicantEmail({ name, jobTitle }),
    });

    // Convert ArrayBuffer to Buffer for attachments
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const qualificationBuffer = Buffer.from(await qualification.arrayBuffer());

    // Send email to the company
    await resend.emails.send({
      from: "Trickal Holdings Careers <no-reply@trickalholdings.com>",
      to: "trickalholdings@gmail.com",
      subject: `New Application: ${jobTitle}`,
      react: CompanyEmail({ name, email, phone, jobTitle, coverLetter }),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
        {
          filename: qualification.name,
          content: qualificationBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
