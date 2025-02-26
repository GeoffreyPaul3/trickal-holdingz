"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Job } from "@/types/job"

const jobOpenings: Job[] = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    department: "IT & Engineering",
    location: "Blantyre, Malawi",
    category: "Technology",
    description: "We are seeking a skilled Full Stack Web Developer to develop and maintain our web applications and platforms. The ideal candidate will have experience in both front-end and back-end development, ensuring seamless performance and user experience.",
  },
  {
    id: 2,
    title: "Graphic Designer",
    department: "Marketing & Design",
    location: "Blantyre, Malawi",
    category: "Marketing",
    description:
      "We are looking for a talented Graphic Designer to create visually appealing designs that align with our brand and marketing goals. The ideal candidate should have a strong eye for aesthetics, typography, and layout.",
  },
  {
    id: 3,
    title: "Social Media Strategist",
    department: "Social Media & Marketing",
    location: "Blantyre, Malawi",
    category: "Makerting",
    description: "We are looking for a creative and analytical Social Media Strategist to manage and grow our online presence. The ideal candidate will develop and implement effective social media strategies to enhance brand awareness, drive engagement, and increase conversions.",
  },
]

const categories = ["All", ...new Set(jobOpenings.map((job) => job.category))]

interface JobListProps {
  onSelectJob: (job: Job | null) => void
}

export default function JobList({ onSelectJob }: JobListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredJobs = jobOpenings.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || job.category === selectedCategory),
  )

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search jobs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {filteredJobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div>
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">
              {job.department} • {job.location}
            </p>
            <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
              {job.category}
            </span>
          </div>
          <Button onClick={() => onSelectJob(job)} variant="outline">
            View Details
          </Button>
        </motion.div>
      ))}
      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No jobs found matching your criteria.</p>
      )}
    </div>
  )
}

