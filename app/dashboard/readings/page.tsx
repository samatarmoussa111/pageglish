import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, Star } from "lucide-react"

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A classic American novel about the Jazz Age, exploring themes of wealth, love, and the American Dream.",
    level: "Intermediate",
    pages: 180,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice and childhood innocence in the American South.",
    level: "Advanced",
    pages: 324,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age story following Holden Caulfield's experiences in New York City.",
    level: "Intermediate",
    pages: 277,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
    level: "Advanced",
    pages: 432,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure following Bilbo Baggins on his unexpected journey.",
    level: "Beginner",
    pages: 310,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and the dangers of government surveillance.",
    level: "Advanced",
    pages: 328,
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=150",
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-muted text-muted-foreground"
    case "Intermediate":
      return "bg-muted text-muted-foreground"
    case "Advanced":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ReadingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Readings</h1>
          <p className="text-gray-600">Discover and download books to improve your English</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative">
                <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                <Badge className={`absolute top-2 right-2 ${getLevelColor(book.level)}`}>{book.level}</Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">by {book.author}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-3">{book.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{book.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{book.rating}</span>
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Book
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
