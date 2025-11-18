import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mike</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experienced leader with 10+ years driving startup growth through strategic product development, team leadership, and data-driven decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            CORE SKILLS & EXPERTISE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Product Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing product vision, strategy and tactics, roadmapping, discovery, product lifecycle management, product led growth
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Technical
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                APIs, testing, QA automation, release management, Linux/Unix, front & backend testing
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Data & Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                SQL, A/B testing, behavioral event tracking, attribution, database design
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Tools & Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Jira, Linear, Contentful, Shopify, Stripe, Twillio, Algolia, Rudderstack, Klaviyo, GA4, Meta Business Suite, Hotjar, Mixpanel, Posthog, Postman, Retool, ChatPRD, Replit
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
