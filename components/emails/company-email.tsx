import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

interface CompanyEmailProps {
  name: string
  email: string
  phone: string
  jobTitle: string
}

export default function CompanyEmail({ name, email, phone, jobTitle }: CompanyEmailProps) {
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
          <Hr style={hr} />
          <Text style={footer}>This is an automated message from the Trickal Holdings Careers system.</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
}

const section = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "4px",
  marginTop: "20px",
}

const sectionHeader = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}

