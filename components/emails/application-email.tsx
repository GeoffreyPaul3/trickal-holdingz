import { Html, Body, Head, Heading, Hr, Container, Preview, Text } from "@react-email/components"

interface ApplicantEmailProps {
  name: string
  jobTitle: string
}

export default function ApplicantEmail({ name, jobTitle }: ApplicantEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your application to Trickal Holdings</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Application Received</Heading>
          <Text style={text}>Dear {name},</Text>
          <Text style={text}>
            Thank you for applying for the position of {jobTitle} at Trickal Holdings. We have received your application
            and appreciate your interest in joining our team.
          </Text>
          <Text style={text}>
            Our hiring team will review your application carefully. If your qualifications match our requirements, we
            will contact you to schedule an interview.
          </Text>
          <Text style={text}>
            Thank you again for considering Trickal Holdings as your potential employer. We wish you the best in your
            job search.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Trickal Holdings | Empowering Your Financial Future</Text>
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

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
}

