"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface JobDetail {
  title: string
  department: string
  location: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

const jobDetails: { [key: number]: JobDetail } = {
  1: {
    title: "Software Engineer",
    department: "Engineering",
    location: "Blantyre, Malawi",
    description:
      "We are seeking a talented Software Engineer to join our innovative team at Trickal Holdings. As a Software Engineer, you will play a crucial role in developing and maintaining high-quality software solutions that empower our clients' financial futures.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
    ],
    responsibilities: [
      "Develop and maintain high-quality software solutions",
      "Collaborate with cross-functional teams to define and implement new features",
      "Participate in code reviews and contribute to best practices",
      "Troubleshoot, debug, and optimize application performance",
      "Stay up-to-date with emerging trends and technologies in software development",
      "Mentor junior developers and contribute to a positive team culture",
    ],
  },
  2: {
    title: "Product Manager",
    department: "Product",
    location: "Lilongwe, Malawi",
    description:
      "Trickal Holdings is looking for an experienced Product Manager to lead our product development initiatives. In this role, you will be responsible for defining product strategy, managing the product lifecycle, and ensuring our solutions meet the needs of our clients in the financial sector.",
    requirements: [
      "Bachelor's degree in Business, Computer Science, or related field",
      "5+ years of experience in product management, preferably in fintech",
      "Strong understanding of agile methodologies and product development processes",
      "Excellent analytical and problem-solving skills",
      "Outstanding communication and leadership abilities",
      "Experience with data-driven decision making and product analytics",
    ],
    responsibilities: [
      "Define and execute product strategy aligned with company goals",
      "Gather and prioritize product and customer requirements",
      "Create detailed product roadmaps and manage the product backlog",
      "Work closely with engineering, design, and marketing teams",
      "Conduct market research and stay informed about industry trends",
      "Analyze product performance and make data-driven decisions",
    ],
  },
  3: {
    title: "Financial Analyst",
    department: "Finance",
    location: "Blantyre, Malawi",
    description:
      "We are seeking a detail-oriented Financial Analyst to join our finance team at Trickal Holdings. In this role, you will be responsible for providing financial planning, analysis, and reporting to support strategic decision-making and drive business growth.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "3+ years of experience in financial analysis or related role",
      "Strong proficiency in Excel and financial modeling",
      "Knowledge of financial reporting and accounting principles",
      "Excellent analytical and problem-solving skills",
      "Strong attention to detail and ability to meet deadlines",
    ],
    responsibilities: [
      "Prepare and analyze financial reports, budgets, and forecasts",
      "Conduct financial modeling and scenario analysis",
      "Support the budgeting and planning process",
      "Identify trends and provide insights to improve financial performance",
      "Assist in the preparation of investor presentations and board reports",
      "Collaborate with other departments to gather and analyze financial data",
    ],
  },
  4: {
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Remote",
    description:
      "Trickal Holdings is looking for a Customer Support Specialist to provide exceptional service to our clients. As a key member of our customer service team, you will be responsible for addressing client inquiries, resolving issues, and ensuring a positive customer experience.",
    requirements: [
      "Bachelor's degree in Business, Communications, or related field",
      "2+ years of experience in customer service, preferably in the financial sector",
      "Excellent communication skills, both written and verbal",
      "Strong problem-solving abilities and attention to detail",
      "Ability to work independently and as part of a team",
      "Proficiency in CRM software and Microsoft Office suite",
    ],
    responsibilities: [
      "Respond to customer inquiries via phone, email, and chat",
      "Troubleshoot and resolve customer issues in a timely manner",
      "Maintain and update customer records in our CRM system",
      "Identify and escalate complex issues to appropriate teams",
      "Contribute to the development of customer service policies and procedures",
      "Provide feedback to product and engineering teams based on customer interactions",
    ],
  },
  5: {
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Blantyre, Malawi",
    description:
      "We are seeking a creative and organized Marketing Coordinator to join our marketing team at Trickal Holdings. In this role, you will support the planning, execution, and analysis of marketing campaigns to promote our financial solutions and grow our brand presence.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "1-3 years of experience in marketing or related role",
      "Strong written and verbal communication skills",
      "Proficiency in social media platforms and marketing tools",
      "Basic knowledge of graphic design and video editing software",
      "Excellent organizational and time management skills",
    ],
    responsibilities: [
      "Assist in the development and execution of marketing campaigns",
      "Manage and create content for social media platforms",
      "Coordinate the production of marketing materials",
      "Track and report on marketing metrics and campaign performance",
      "Collaborate with internal teams and external vendors",
      "Support event planning and execution for company initiatives",
    ],
  },
}

interface Job {
  id: number
}

interface JobDetailsProps {
  job: Job
  onApply: () => void
}

export default function JobDetails({ job, onApply }: JobDetailsProps) {
  if (!job) {
    return <div className="text-center py-4">Select a job to view details</div>
  }

  const details = jobDetails[job.id]

  if (!details) {
    return <div className="text-center py-4">Job details not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold">{details.title}</h2>
      <p className="text-gray-600">
        {details.department} • {details.location}
      </p>
      <div>
        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
        <p>{details.description}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
        <ul className="list-disc pl-5 space-y-1">
          {details.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-1">
          {details.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <Button className="w-full" onClick={onApply}>
        Apply for this Position
      </Button>
    </motion.div>
  )
}

