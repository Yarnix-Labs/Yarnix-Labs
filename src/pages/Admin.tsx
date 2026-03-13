import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in (you can customize this)
    const token = localStorage.getItem('sanity-token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = () => {
    // Open local Sanity Studio
    window.open('http://localhost:3333', '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sanity CMS Access</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Manage your website content including blog posts, projects, team members, services, and testimonials.
              </p>
              
              {!isLoggedIn ? (
                <button
                  onClick={handleLogin}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Open Sanity Studio
                </button>
              ) : (
                <div className="space-y-4">
                  <p className="text-green-600 dark:text-green-400 mb-4">
                    ✓ You have access to Sanity Studio
                  </p>
                  <button
                    onClick={handleLogin}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Launch Sanity Studio
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <AdminCard 
                title="Blog Posts" 
                icon="📝"
                description="Manage blog articles and categories"
              />
              <AdminCard 
                title="Projects" 
                icon="🚀"
                description="Showcase your portfolio projects"
              />
              <AdminCard 
                title="Team Members" 
                icon="👥"
                description="Update team member information"
              />
              <AdminCard 
                title="Services" 
                icon="⚙️"
                description="Configure service offerings"
              />
              <AdminCard 
                title="Testimonials" 
                icon="💬"
                description="Manage client testimonials"
              />
              <AdminCard 
                title="Contact Info" 
                icon="📞"
                description="Update contact details"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const AdminCard = ({ title, icon, description }: { title: string; icon: string; description: string }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
  </div>
)

export default Admin
