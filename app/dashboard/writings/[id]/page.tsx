import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Save,
  Send,
  Clock,
  Target,
  CheckCircle,
  MessageSquare,
  Edit,
} from "lucide-react";
import Link from "next/link";

type WritingSubject = {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  targetWords: number;
  content: string;
  instructions: string[];
  correctedContent?: string;
  teacherRemarks?: string[];
};

const getWritingSubject = (id: string): WritingSubject => {
  const subjects = {
    "1": {
      id: 1,
      title: "Describe Your Dream Vacation",
      description:
        "Write about where you would like to go and what you would do there. Include details about the location, activities, and why it appeals to you.",
      status: "draft",
      dueDate: "2024-01-15",
      targetWords: 300,
      content:
        "My dream vacation would be to visit Japan during cherry blossom season. I have always been fascinated by Japanese culture and the beautiful landscapes I've seen in photos.",
      instructions: [
        "Use descriptive language to paint a vivid picture",
        "Include specific details about the location",
        "Explain why this destination appeals to you",
        "Describe at least 3 activities you would do",
        "Use proper paragraph structure",
      ],
    },
    "2": {
      id: 2,
      title: "The Impact of Technology on Education",
      description:
        "Discuss how technology has changed the way we learn. Consider both positive and negative aspects.",
      status: "inreview",
      dueDate: "2024-01-10",
      targetWords: 400,
      content:
        "Technology has revolutionized education in numerous ways. Online learning platforms have made education more accessible to people around the world. Students can now attend virtual classes, access digital libraries, and collaborate with peers from different countries. However, there are also challenges such as digital divide and reduced face-to-face interaction.",
      instructions: [
        "Discuss both positive and negative aspects",
        "Provide specific examples",
        "Use transitional phrases to connect ideas",
        "Support your arguments with evidence",
        "Conclude with your personal opinion",
      ],
    },
    "3": {
      id: 3,
      title: "A Memorable Childhood Experience",
      description:
        "Share a story from your childhood that had a significant impact on you. Explain why it was meaningful.",
      status: "done",
      dueDate: "2024-01-05",
      targetWords: 300,
      content:
        "When I was eight years old, I got lost in a shopping mall. I was terrified and started crying. A kind security guard helped me find my parents. This experience taught me the importance of staying close to my family and also showed me that there are good people willing to help others in need.",
      correctedContent:
        "When I was eight years old, I got lost in a shopping mall. I was terrified and started crying. A kind security guard helped me find my parents. This experience taught me the importance of staying close to my family and also showed me that there are good people willing to help others in need. The fear I felt that day made me more cautious, but the kindness of the stranger restored my faith in humanity.",
      teacherRemarks: [
        "Excellent storytelling! You captured the emotions very well.",
        "Good use of past tense throughout the essay.",
        "Consider adding more descriptive details about your feelings.",
        "The conclusion effectively ties the experience to a life lesson.",
        "Minor suggestion: You could expand on how this experience changed your behavior.",
      ],
      instructions: [
        "Tell a complete story with beginning, middle, and end",
        "Include emotional details",
        "Explain the impact or lesson learned",
        "Use descriptive language",
        "Maintain consistent verb tense",
      ],
    },
  };
  return subjects[id as keyof typeof subjects] || subjects["1"];
};

export default function WritingEditorPage({
  params,
}: {
  params: { id: string };
}) {
  const writingSubject = getWritingSubject(params.id);

  if (writingSubject.status === "done") {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/writings">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Writings
              </Link>
            </Button>
          </div>

          {/* Writing Subject Info */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">
                    {writingSubject.title}
                  </CardTitle>
                  <p className="text-gray-600">{writingSubject.description}</p>
                </div>
                <Badge className="bg-muted text-muted-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Completed
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Original Submission & Correction */}
            <div className="lg:col-span-2 space-y-6">
              {/* Your Original Submission */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Edit className="h-5 w-5" />
                    <span>Your Original Submission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {writingSubject.content}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Teacher's Correction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Teacher&apos;s Correction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                      {writingSubject.correctedContent}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Teacher's Remarks */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Teacher&apos;s Remarks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {writingSubject.teacherRemarks?.map((remark, index) => (
                      <div key={index} className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          {remark}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (writingSubject.status === "inreview") {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/writings">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Writings
              </Link>
            </Button>
          </div>

          {/* Writing Subject Info */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">
                    {writingSubject.title}
                  </CardTitle>
                  <p className="text-gray-600">{writingSubject.description}</p>
                </div>
                <Badge className="bg-muted text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  In Review
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>Target: {writingSubject.targetWords} words</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    Due: {new Date(writingSubject.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submitted Content (Read-only) */}
          <Card>
            <CardHeader>
              <CardTitle>Your Submission</CardTitle>
              <p className="text-sm text-gray-600">
                Your writing has been submitted and is currently being reviewed
                by your teacher.
              </p>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {writingSubject.content}
                </p>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <span>
                  {writingSubject.content.split(" ").length} /{" "}
                  {writingSubject.targetWords} words
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/writings">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Writings
            </Link>
          </Button>
        </div>

        {/* Writing Subject Info */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl">
                  {writingSubject.title}
                </CardTitle>
                <p className="text-gray-600">{writingSubject.description}</p>
              </div>
              <Badge
                className={
                  writingSubject.status === "draft"
                    ? "bg-muted text-muted-foreground"
                    : "bg-muted text-muted-foreground"
                }
              >
                {writingSubject.status === "draft" ? "Draft" : "New"}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>Target: {writingSubject.targetWords} words</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>
                  Due: {new Date(writingSubject.dueDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Writing Editor */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Writing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Start writing your response here..."
                  className="min-h-[400px] resize-none"
                  defaultValue={writingSubject.content}
                />

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span>
                      {
                        writingSubject.content
                          .split(" ")
                          .filter((word) => word.length > 0).length
                      }{" "}
                      / {writingSubject.targetWords} words
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Submit for Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Writing Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {writingSubject.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground">Planning</p>
                  <p className="text-muted-foreground">
                    Take a few minutes to outline your ideas before writing.
                  </p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground">Vocabulary</p>
                  <p className="text-muted-foreground">
                    Use varied vocabulary to make your writing more engaging.
                  </p>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground">Review</p>
                  <p className="text-muted-foreground">
                    Always proofread your work before submitting.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
