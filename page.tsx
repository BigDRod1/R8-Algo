import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Eye } from "lucide-react"

export default function GitHubLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Github className="h-6 w-6" />
            <span className="font-bold text-xl">Your Project Name</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#docs" className="text-gray-600 hover:text-gray-900">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="https://github.com/yourusername/yourproject" className="text-gray-600 hover:text-gray-900">
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Project</h1>
          <p className="text-xl text-gray-600 mb-8">A brief description of your project and its main features.</p>
          <div className="flex justify-center space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">View on GitHub</Button>
          </div>
        </section>

        <section id="features" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-8">Project Stats</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Star className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">1.2k</span>
            </div>
            <div className="flex items-center">
              <GitFork className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">234</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">56</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Project Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

