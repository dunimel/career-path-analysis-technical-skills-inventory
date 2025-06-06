import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

export default function GapAnalysis() {
  const careerPaths = [
    {
      title: "Social Impact Technology Director",
      keySkills: [
        { name: "Technical Architecture Design", category: "Technical Leadership", priority: "high" },
        { name: "Stakeholder Management", category: "Product & Strategy", priority: "high" },
        { name: 'Cloud Services", category  category: "Product & Strategy', priority: "high" },
        { name: "Cloud Services", category: "DevOps & Infrastructure", priority: "high" },
        { name: "Impact Metrics & KPIs", category: "Social Impact Measurement", priority: "high" },
        { name: "Technical Strategy", category: "Product & Strategy", priority: "high" },
        { name: "Team Management", category: "Team Management", priority: "high" },
      ],
      likelyGaps: [
        "Impact measurement methodologies",
        "Enterprise architecture for social impact",
        "Technical strategy aligned with mission",
        "Stakeholder management across sectors",
      ],
    },
    {
      title: "Civic Technology Engineering Manager",
      keySkills: [
        { name: "Agile Methodologies", category: "Team Management", priority: "high" },
        { name: "Open Data Standards", category: "Civic Tech Specific", priority: "high" },
        { name: "API Development", category: "Backend Development", priority: "high" },
        { name: "Public Sector Compliance", category: "Civic Tech Specific", priority: "high" },
        { name: "Technical Mentorship", category: "Team Management", priority: "high" },
      ],
      likelyGaps: [
        "Government digital services knowledge",
        "Public sector compliance requirements",
        "Open data standards and practices",
        "Civic engagement platform design",
      ],
    },
    {
      title: "EdTech Platform Architect",
      keySkills: [
        { name: "Learning Management Systems", category: "EdTech Specific", priority: "high" },
        { name: "Accessibility (WCAG)", category: "Frontend Development", priority: "high" },
        { name: "System Design & Scalability", category: "Technical Leadership", priority: "high" },
        { name: "Student Data Privacy", category: "EdTech Specific", priority: "high" },
        { name: "Mobile UI/UX", category: "Mobile Development", priority: "medium" },
      ],
      likelyGaps: [
        "Educational content standards",
        "Learning management system architecture",
        "Student data privacy regulations",
        "Adaptive learning algorithms",
      ],
    },
    {
      title: "Fintech Inclusion Engineering Leader",
      keySkills: [
        { name: "Financial Data Security", category: "Fintech Specific", priority: "high" },
        { name: "Banking APIs", category: "Fintech Specific", priority: "high" },
        { name: "Authentication/Authorization", category: "Backend Development", priority: "high" },
        { name: "Regulatory Compliance", category: "Fintech Specific", priority: "high" },
        { name: "Microservices Architecture", category: "Backend Development", priority: "high" },
      ],
      likelyGaps: [
        "Financial regulatory compliance",
        "Banking API integration",
        "Payment processing systems",
        "Financial data security standards",
      ],
    },
    {
      title: "Tech for Good Product Director",
      keySkills: [
        { name: "Product Roadmapping", category: "Product & Strategy", priority: "high" },
        { name: "User Research", category: "Product & Strategy", priority: "high" },
        { name: "Impact Metrics & KPIs", category: "Social Impact Measurement", priority: "high" },
        { name: "Technical Architecture Design", category: "Technical Leadership", priority: "medium" },
        { name: "Data Visualization", category: "Data Science", priority: "medium" },
      ],
      likelyGaps: [
        "Product management methodologies",
        "Impact measurement frameworks",
        "User research for vulnerable populations",
        "Social impact product strategy",
      ],
    },
  ]

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Gap Analysis by Career Path</CardTitle>
        <CardDescription>
          Likely skill gaps for each social impact tech role based on typical full stack engineer background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="social-impact-tech-director">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="social-impact-tech-director">Tech Director</TabsTrigger>
            <TabsTrigger value="civic-tech-manager">Civic Tech</TabsTrigger>
            <TabsTrigger value="edtech-architect">EdTech</TabsTrigger>
            <TabsTrigger value="fintech-leader">Fintech</TabsTrigger>
            <TabsTrigger value="product-director">Product Director</TabsTrigger>
          </TabsList>

          <TabsContent value="social-impact-tech-director" className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Social Impact Technology Director</AlertTitle>
              <AlertDescription>
                As a full stack engineer with management experience, you likely have many of the technical skills
                needed, but may need to develop domain expertise in social impact measurement and cross-sector
                collaboration.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {careerPaths[0].keySkills.map((skill) => (
                    <Badge key={skill.name} variant={skill.priority === "high" ? "default" : "outline"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Likely Skill Gaps</h3>
                <ul className="space-y-2">
                  {careerPaths[0].likelyGaps.map((gap) => (
                    <li key={gap} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Social impact measurement frameworks and methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Stakeholder management across nonprofit, public, and private sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical strategy aligned with mission-driven organizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enterprise architecture for social impact applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="civic-tech-manager" className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Civic Technology Engineering Manager</AlertTitle>
              <AlertDescription>
                Your software engineering and team management experience provides a strong foundation, but you'll need
                to develop specific knowledge of government digital services and public sector requirements.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {careerPaths[1].keySkills.map((skill) => (
                    <Badge key={skill.name} variant={skill.priority === "high" ? "default" : "outline"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Likely Skill Gaps</h3>
                <ul className="space-y-2">
                  {careerPaths[1].likelyGaps.map((gap) => (
                    <li key={gap} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Open data standards and practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Government digital services and procurement processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Public sector compliance and security requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Civic engagement platform design principles</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="edtech-architect" className="space-y-4">
            {/* Similar structure for EdTech */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>EdTech Platform Architect</AlertTitle>
              <AlertDescription>
                Your technical skills transfer well to this role, but you'll need to develop specific knowledge of
                educational technology standards, learning management systems, and student data privacy regulations.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {careerPaths[2].keySkills.map((skill) => (
                    <Badge key={skill.name} variant={skill.priority === "high" ? "default" : "outline"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Likely Skill Gaps</h3>
                <ul className="space-y-2">
                  {careerPaths[2].likelyGaps.map((gap) => (
                    <li key={gap} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Learning management system architecture and standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Educational content standards and accessibility requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Student data privacy regulations (FERPA, COPPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Adaptive learning algorithms and personalized education</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fintech-leader" className="space-y-4">
            {/* Similar structure for Fintech */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Fintech Inclusion Engineering Leader</AlertTitle>
              <AlertDescription>
                Your software engineering background provides a strong foundation, but you'll need to develop specific
                knowledge of financial regulations, banking APIs, and security standards for financial data.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {careerPaths[3].keySkills.map((skill) => (
                    <Badge key={skill.name} variant={skill.priority === "high" ? "default" : "outline"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Likely Skill Gaps</h3>
                <ul className="space-y-2">
                  {careerPaths[3].likelyGaps.map((gap) => (
                    <li key={gap} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Financial regulatory compliance (KYC, AML, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Banking API integration and standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Payment processing systems and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Financial inclusion principles and underbanked user needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="product-director" className="space-y-4">
            {/* Similar structure for Product Director */}
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Tech for Good Product Director</AlertTitle>
              <AlertDescription>
                Your technical background is valuable, but you'll need to develop product management skills, impact
                measurement frameworks, and user research methodologies for vulnerable populations.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {careerPaths[4].keySkills.map((skill) => (
                    <Badge key={skill.name} variant={skill.priority === "high" ? "default" : "outline"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Likely Skill Gaps</h3>
                <ul className="space-y-2">
                  {careerPaths[4].likelyGaps.map((gap) => (
                    <li key={gap} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Product management methodologies and roadmapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Social impact measurement frameworks and KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User research methodologies for vulnerable populations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Balancing business sustainability with social impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
