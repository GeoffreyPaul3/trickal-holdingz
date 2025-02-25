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
  // ... (other job details remain unchanged) ...
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

