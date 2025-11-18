import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore my portfolio of web development projects',
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '🛒',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration features, and analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '📋',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather application with location-based forecasts, historical data, and beautiful visualizations.',
    technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
    image: '🌤️',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A headless CMS for managing blog content with markdown support, SEO optimization, and a modern editor.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'NextAuth'],
    image: '✍️',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description: 'A tool for developers to create beautiful portfolio websites using templates and custom configurations.',
    technologies: ['React', 'Node.js', 'Express', 'Template Engine'],
    image: '🎨',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media metrics, engagement rates, and audience insights.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
    image: '📊',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Project Icon/Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-7xl">
                {project.image}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.github}
                    className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more or collaborate on a project?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
