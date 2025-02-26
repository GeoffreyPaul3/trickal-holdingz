import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

interface CompanyEmailProps {
  name: string
  email: string
  phone: string
  jobTitle: string
  coverLetter: string
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "normal",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
}

const text = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
}

const section = {
  marginTop: "20px",
}

const sectionHeader = {
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "10px",
}

const hr = {
  borderColor: "#ddd",
  borderStyle: "solid",
  borderWidth: "1px 0 0 0",
  margin: "20px 0",
}

const footer = {
  color: "#999",
  fontSize: "12px",
  lineHeight: "20px",
  marginTop: "30px",
  textAlign: "center" as const,
}

export default function CompanyEmail({ name, email, phone, jobTitle, coverLetter }: CompanyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New job application received for {jobTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Job Application</Heading>
          <Text style={text}>A new application has been received for the {jobTitle} position.</Text>
          <Section style={section}>
            <Text style={sectionHeader}>Applicant Details:</Text>
            <Text style={text}>Name: {name}</Text>
            <Text style={text}>Email: {email}</Text>
            <Text style={text}>Phone: {phone}</Text>
          </Section>
          <Section style={section}>
            <Text style={sectionHeader}>Cover Letter:</Text>
            <Text style={text}>{coverLetter}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This is an automated message from the Trickal Holdings Careers system. The applicant&apos;s resume and
            qualification documents are attached to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

