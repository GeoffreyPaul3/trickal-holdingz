"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JobList from "@/components/job-list"
import JobDetails from "@/components/job-details"
import ApplicationForm from "@/components/application-form"
import CompanyCulture from "@/components/company-culture"
import { motion } from "framer-motion"
import type { Job } from "@/types/job"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [activeTab, setActiveTab] = useState("openings")

  const handleApply = () => {
    setActiveTab("apply")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gradient-to-b from-blue-600 to-indigo-700 shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
           <div className="flex items-center">
            <Link href="/">
            <Image
              src="/assets/Trickal.png"
              width={80}
              height={80}
              alt="Trickal Holdings Logo"
              className="w-auto h-12 mr-3"
            />
            </Link>         
          </div>
   
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-6 sm:px-0"
        >
          <section className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shape the Future of Finance</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our team of innovators and make a difference in the world of financial technology.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const jobOpeningsElement = document.getElementById("job-openings");
                if (jobOpeningsElement) {
                  jobOpeningsElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Open Positions
            </Button>
          </section>

          <CompanyCulture />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8" id="job-openings">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="openings">Job Openings</TabsTrigger>
              <TabsTrigger value="apply">Apply Now</TabsTrigger>
            </TabsList>
            <TabsContent value="openings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Current Opportunities</CardTitle>
                  <CardDescription>Explore our open positions and find your perfect role.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <JobList onSelectJob={setSelectedJob} />
                    {selectedJob && <JobDetails job={selectedJob} onApply={handleApply} />}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="apply">
              <Card>
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                  <CardDescription>Submit your application for the selected position.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ApplicationForm selectedJob={selectedJob || undefined} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}
