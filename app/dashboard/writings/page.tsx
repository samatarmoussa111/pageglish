import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PenTool, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

const writingSubjects = [
  {
    id: 1,
    title: "Describe Your Dream Vacation",
    description:
      "Write about where you would like to go and what you would do there. Include details about the location, activities, and why it appeals to you.",
    status: "draft", // changed from "new" to "draft"
    dueDate: "2024-01-15",
    wordCount: 150,
    targetWords: 300,
  },
  {
    id: 2,
    title: "The Impact of Technology on Education",
    description: "Discuss how technology has changed the way we learn. Consider both positive and negative aspects.",
    status: "inreview",
    dueDate: "2024-01-10",
    wordCount: 285,
    targetWords: 400,
  },
  {
    id: 3,
    title: "A Memorable Childhood Experience",
    description:
      "Share a story from your childhood that had a significant impact on you. Explain why it was meaningful.",
    status: "done",
    dueDate: "2024-01-05",
    wordCount: 350,
    targetWords: 300,
  },
  {
    id: 4,
    title: "Environmental Conservation",
    description:
      "Write about the importance of protecting our environment and suggest practical solutions for everyday people.",
    status: "inreview",
    dueDate: "2024-01-12",
    wordCount: 420,
    targetWords: 500,
  },
  {
    id: 5,
    title: "The Role of Social Media in Modern Society",
    description: "Analyze how social media affects our daily lives, relationships, and communication patterns.",
    status: "new", // keeping one as "new" for variety
    dueDate: "2024-01-20",
    wordCount: 0,
    targetWords: 450,
  },
  {
    id: 6,
    title: "My Favorite Book and Why",
    description:
      "Write about a book that you enjoyed reading. Explain the plot, characters, and what made it special to you.",
    status: "done",
    dueDate: "2023-12-28",
    wordCount: 275,
    targetWords: 250,
  },
]

const getStatusConfig = (status: string) => {
  switch (status) {
    case "new":
      return {
        label: "New",
        color: "bg-blue-100 text-blue-800",
        icon: AlertCircle,
      }
    case "draft":
      return {
        label: "Draft",
        color: "bg-orange-100 text-orange-800",
        icon: PenTool,
      }
    case "inreview":
      return {
        label: "In Review",
        color: "bg-yellow-100 text-yellow-800",
        icon: Clock,
      }
    case "done":
      return {
        label: "Done",
        color: "bg-green-100 text-green-800",
        icon: CheckCircle,
      }
    default:
      return {
        label: status,
        color: "bg-gray-100 text-gray-800",
        icon: AlertCircle,
      }
  }
}

export default function WritingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Writings</h1>
          <p className="text-gray-600">Practice your writing skills with guided exercises</p>
        </div>

        <div className="grid gap-4">
          {writingSubjects.map((subject) => {
            const statusConfig = getStatusConfig(subject.status)
            const StatusIcon = statusConfig.icon

            return (
              <Card key={subject.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg">{subject.title}</CardTitle>
                      <CardDescription className="text-sm">{subject.description}</CardDescription>
                    </div>
                    <Badge className={`${statusConfig.color} px-3 py-1 font-medium`}>
                      <StatusIcon className="h-3 w-3 mr-1.5" />
                      {statusConfig.label}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <PenTool className="h-4 w-4" />
                        <span>
                          {subject.wordCount}/{subject.targetWords} words
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Due: {new Date(subject.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <Button size="sm" variant={subject.status === "done" ? "outline" : "default"} asChild>
                      <Link href={`/dashboard/writings/${subject.id}`}>
                        {subject.status === "done"
                          ? "View Results"
                          : subject.status === "new"
                            ? "Start Writing"
                            : subject.status === "draft"
                              ? "Continue Writing"
                              : "View Submission"}
                      </Link>
                    </Button>
                  </div>

                  {subject.wordCount > 0 && (
                    <div className="mt-3">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${Math.min((subject.wordCount / subject.targetWords) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
