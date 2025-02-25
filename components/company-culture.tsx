"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp, Heart } from "lucide-react"

const cultureItems = [
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Collaborative Environment",
    description: "Work alongside talented individuals in a supportive team setting.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovation-Driven",
    description: "Embrace creativity and push the boundaries of financial technology.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths for all employees.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and emphasis on employee well-being.",
  },
]

export default function CompanyCulture() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Company Culture</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cultureItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

