import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | My Portfolio',
  description: 'Learn more about my background, skills, and experience',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hello! 👋
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems.
              With several years of experience in web development, I specialize in building modern,
              responsive applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Figma'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Other Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Agile', 'Testing', 'CI/CD'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                2022 - Present
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Senior Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Company Name</p>
              <p className="text-gray-700 dark:text-gray-300">
                Leading development of modern web applications using React and Next.js.
                Mentoring junior developers and contributing to architectural decisions.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                2020 - 2022
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Previous Company</p>
              <p className="text-gray-700 dark:text-gray-300">
                Developed and maintained full-stack applications. Worked with cross-functional
                teams to deliver high-quality software solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
