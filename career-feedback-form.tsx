"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ChevronRight, CheckCircle2 } from "lucide-react"

export default function CareerFeedbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])
  const [otherConcern, setOtherConcern] = useState("")
  const [feedback, setFeedback] = useState("")

  const concerns = [
    "Financial stability concerns as a single primary caregiver",
    "Suggested roles may have unstable/inconsistent funding",
    "Desire to leverage my technical skills more directly",
    "Need for higher compensation potential",
    "Preference for more stable employment opportunities",
    "Concerns about frequently needing to seek new employment",
  ]

  const handleConcernChange = (value: string) => {
    if (selectedConcerns.includes(value)) {
      setSelectedConcerns(selectedConcerns.filter((item) => item !== value))
    } else {
      setSelectedConcerns([...selectedConcerns, value])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real implementation, this would send the feedback to the career analyst
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-2" />
          <CardTitle className="text-xl">Feedback Submitted</CardTitle>
          <CardDescription>
            Your feedback has been sent to the career analyst. Expect a response within 3-5 business days.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-xl">Career Path Analysis Feedback</CardTitle>
          <CardDescription>
            Share your concerns with the career analyst about the suggested career paths
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>What concerns do you have about the suggested career paths? (Select all that apply)</Label>
            <div className="grid grid-cols-1 gap-3">
              {concerns.map((concern) => (
                <div key={concern} className="flex items-start space-x-2">
                  <Checkbox
                    id={concern}
                    checked={selectedConcerns.includes(concern)}
                    onCheckedChange={() => handleConcernChange(concern)}
                  />
                  <Label htmlFor={concern} className="font-normal">
                    {concern}
                  </Label>
                </div>
              ))}
              <div className="flex flex-col space-y-2 mt-2">
                <Label htmlFor="other-concern" className="font-normal">
                  Other concern (please specify):
                </Label>
                <Input
                  id="other-concern"
                  value={otherConcern}
                  onChange={(e) => setOtherConcern(e.target.value)}
                  placeholder="Add any other concerns..."
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback">Detailed Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="I appreciate the thoughtful analysis, but as a single primary caregiver, I need to prioritize financial stability..."
              rows={6}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label>Current Technical Experience Priority</Label>
            <RadioGroup defaultValue="high">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="font-normal">
                  High - I want to directly use my software engineering skills
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="font-normal">
                  Medium - I want a blend of technical and social impact work
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="font-normal">
                  Low - I'm open to moving away from technical roles
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit Feedback <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
