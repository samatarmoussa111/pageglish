import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, PenTool, Users, Trophy } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-muted/60">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">PageGlish</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Master English Through
            <span className="text-primary"> Reading & Writing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Improve your English skills with our comprehensive platform featuring curated books and guided writing
            exercises.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/signup">Start Learning Today</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose PageGlish?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines the best of reading and writing to accelerate your English learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Curated Books</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access a library of carefully selected books to improve your reading comprehension and vocabulary.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Writing Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Practice writing with guided prompts and receive feedback to enhance your writing skills.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Expert Review</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get your writing reviewed by experienced English teachers and receive personalized feedback.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your improvement with detailed progress tracking and achievement milestones.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Improve Your English?</h3>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of learners who are already improving their English skills with PageGlish.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">PageGlish</span>
          </div>
          <p className="text-background/70">© 2024 PageGlish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
