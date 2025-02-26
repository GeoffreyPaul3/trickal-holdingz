import { Resend } from "resend"
import { NextResponse } from "next/server"

import CompanyEmail from "@/components/emails/company-email"
import ApplicantEmail from "@/components/emails/application-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, phone, jobTitle } = await request.json()

  try {
    // Send email to the applicant
    await resend.emails.send({
      from: "Trickal Holdings <no-reply@trickalholdings.com>",
      to: email,
      subject: "Application Received - Trickal Holdings",
      react: ApplicantEmail({ name, jobTitle }),
    })

    // Send email to the company
    await resend.emails.send({
      from: "Trickal Holdings Careers <no-reply@trickalholdings.com",
      to: "trickalholdings@gmail.com",
      subject: `New Application: ${jobTitle}`,
      react: CompanyEmail({ name, email, phone, jobTitle }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

