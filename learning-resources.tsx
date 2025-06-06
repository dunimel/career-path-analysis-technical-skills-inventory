import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { resources } from "@/lib/resources-data"

export default function LearningResources() {
  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Free Learning Resources</CardTitle>
        <CardDescription>Curated free courses to build skills for social impact tech roles</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="core-technical">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="core-technical">Core Technical</TabsTrigger>
            <TabsTrigger value="domain-specific">Domain Specific</TabsTrigger>
            <TabsTrigger value="leadership-management">Leadership</TabsTrigger>
            <TabsTrigger value="emerging-tech">Emerging Tech</TabsTrigger>
          </TabsList>

          {Object.keys(resources).map((tabKey) => (
            <TabsContent key={tabKey} value={tabKey} className="space-y-6">
              {resources[tabKey as keyof typeof resources].map((category) => (
                <div key={category.category} className="space-y-4">
                  <h3 className="text-lg font-medium">{category.category}</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.courses.map((course) => (
                      <Card key={course.title} className="overflow-hidden">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{course.title}</CardTitle>
                            {course.free && (
                              <Badge variant="outline" className="bg-green-50">
                                Free
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{course.provider}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          {course.free ? (
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <a href={course.url} target="_blank" rel="noopener noreferrer">
                                Access Course <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          ) : (
                            <>
                              <p className="text-xs text-muted-foreground mb-2">
                                Paid course, but try these free alternatives:
                              </p>
                              <div className="space-y-2">
                                {course.alternatives?.map((alt) => (
                                  <div key={alt.title} className="text-sm">
                                    <a
                                      href={alt.url}
                                      className="text-primary hover:underline flex items-center"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {alt.title} <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                    <span className="text-xs text-muted-foreground">{alt.provider}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
