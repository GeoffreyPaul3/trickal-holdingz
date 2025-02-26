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
    title: " Full Stack Web Developer",
    department: "IT & Engineering",
    location: "Blantyre, Malawi",
    description:
      "We are seeking a skilled Full Stack Web Developer to develop and maintain our web applications and platforms. The ideal candidate will have experience in both front-end and back-end development, ensuring seamless performance and user experience.",
    requirements: [
      "Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      "Proven experience as a Full Stack Developer.",
      "Strong proficiency in front-end technologies (HTML, CSS, JavaScript, React, Vue.js, or Angular).",
      "Proficiency in back-end technologies (Node.js, PHP, Python, Ruby on Rails, or Java).",
      "Familiarity with cloud platforms (AWS, Google Cloud, or Azure) and DevOps practices.",
      "Strong problem-solving and debugging skills.",
    ],
    responsibilities: [
      "Design, develop, and maintain web applications and APIs.",
      "Collaborate with designers, project managers, and other developers.",
      "Optimize applications for maximum speed, performance, and security.",
      "Debug and troubleshoot issues to improve functionality.",
      "Stay up-to-date with emerging technologies and best practices.",
      "Ensure cross-browser and cross-device compatibility.",
    ],
  },
  2: {
    title: "Graphic Designer",
    department: "Marketing",
    location: "Blantyre, Malawi",
    description:
      "We are looking for a talented Graphic Designer to create visually appealing designs that align with our brand and marketing goals. The ideal candidate should have a strong eye for aesthetics, typography, and layout.",
    requirements: [
      "Bachelor’s degree in Graphic Design, Visual Arts, or a related field.",
      "Proven experience as a Graphic Designer or similar role.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Strong understanding of design principles, typography, and color theory.",
      "Experience with motion graphics and video editing (After Effects, Premiere Pro) is a plus.",
      "Ability to work on multiple projects and meet deadlines.",
      "Strong attention to detail and creativity.",
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
    title: "Social Media Strategist",
    department: "Marketing",
    location: "Blantyre, Malawi",
    description:
      "We are looking for a creative and analytical Social Media Strategist to manage and grow our online presence. The ideal candidate will develop and implement effective social media strategies to enhance brand awareness, drive engagement, and increase conversions.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or a related field.",
        "Proven experience as a Social Media Strategist or similar role.",
        "Strong knowledge of major social media platforms (Facebook, Instagram, Twitter, LinkedIn, TikTok).",
        "Experience with social media management tools like Hootsuite, Buffer, or Meta Business Suite.",
        "Proficiency in content creation, including copywriting and basic graphic design.",
        "Analytical mindset with experience using analytics tools like Google Analytics and social media insights.",
        "Excellent communication and time-management skills.",
      ],
    responsibilities: [
      "Develop and execute social media campaigns across various platforms.",
      "Create and curate engaging content, including posts, images, videos, and stories.",
      "Analyze social media performance and generate reports with insights.",
      "Engage with followers, respond to comments and messages promptly.",
      "Stay updated on social media trends, tools, and best practices.",
      "Collaborate with marketing and design teams for consistent branding.",
      "Run and optimize paid social media ads for maximum ROI.",
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

