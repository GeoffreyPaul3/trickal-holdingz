"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Loader2, CheckCircle } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Job } from "@/types/job"

interface ApplicationFormProps {
  selectedJob: Job | undefined
}

const formSteps = ["Personal Info", "Resume", "Cover Letter"]

export default function ApplicationForm({ selectedJob }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  })
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          jobTitle: selectedJob?.title || "Unknown Position",
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  if (submitSuccess) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h3>
        <p className="text-gray-600">
          Thank you for your interest in joining Trickal Holdings. We&apos;ll be in touch soon.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      {selectedJob && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold">Applying for: {selectedJob.title}</h3>
          <p className="text-sm text-gray-600">
            {selectedJob.department} • {selectedJob.location}
          </p>
        </div>
      )}
      <div className="mb-4">
        <Progress value={((currentStep + 1) / formSteps.length) * 100} className="w-full" />
        <div className="flex justify-between mt-2">
          {formSteps.map((step, index) => (
            <span
              key={step}
              className={`text-sm ${index <= currentStep ? "text-blue-600 font-semibold" : "text-gray-400"}`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {currentStep === 0 && (
          <>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
            </div>
          </>
        )}
        {currentStep === 1 && (
          <div>
            <Label htmlFor="resume">Resume/CV</Label>
            <Input id="resume" name="resume" type="file" onChange={handleFileChange} required className="mb-2"/>
            <Label htmlFor="resume">Copy of highest qualification</Label>
            <Input id="resume" name="resume" type="file" onChange={handleFileChange} required />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>
        )}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {currentStep < formSteps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  )
}
