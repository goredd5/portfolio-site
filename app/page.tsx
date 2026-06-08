import Link from 'next/link';
import { HeroContactButton } from '@/components/ContactSection';
import { HeroImage } from '@/components/HeroImage';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroImage>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I&apos;m <span className="text-blue-400">Mike</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Experienced leader with 10+ years driving startup growth through strategic product development, team leadership, and data-driven decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <HeroContactButton />
          </div>
        </div>
      </HeroImage>

      {/* Skills Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Core Values & Skills
          </h2>

          <div className="space-y-12">
            {/* Data Driven | Results Oriented - Title Left */}
            <div
              className="relative p-8 rounded-lg overflow-hidden min-h-[300px] flex items-center"
              style={{
                backgroundImage: 'url(/images/skills/product-strategy.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label="Data Driven Results Oriented - Product Strategy"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Data Driven | Results Oriented
                </h3>
                <p className="text-lg text-gray-100">                
                As a product leader, I strive to build a culture focused on driving measurable impact. When deciding what to work on, the highest-performing teams I&apos;ve led start with clear goals, develop hypotheses grounded in user insights, and use A/B testing to validate our assumptions and track progress toward outcomes that matter.
                </p>
              </div>
            </div>

            {/* Ownership | Positive Impact - Title Left */}
            <div
              className="relative p-8 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-end"
              style={{
                backgroundImage: 'url(/images/skills/data-analytics.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label="Ownership Impact - Data Analytics"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/70 to-black/40"></div>
              <div className="relative z-10 max-w-2xl text-right">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ownership | Impact
                </h3>
                <p className="text-lg text-gray-100">
                I thrive in environments where I can drive meaningful change. I chose to work at startups because they offer the greatest opportunity to create substantial impact—both for customers and the organization. My passion for helping naturally translates into product work, where I can solve real problems and deliver value at scale.  
                </p>
              </div>
            </div>

            {/* Trust | Honesty - Title Right */}
            <div
              className="relative p-8 rounded-lg overflow-hidden min-h-[300px] flex items-center"
              style={{
                backgroundImage: 'url(/images/skills/technical.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label="Trust Honesty - Team Leadership"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Trust | Honesty
                </h3>
                <p className="text-lg text-gray-100">
                  Strong teams are built on a foundation of trust and honesty. I believe everyone deserves to work in an environment where they can rely on open communication and integrity. Throughout my career, I&apos;ve set this standard and held myself accountable to it—leading by example to create cultures where people feel safe to take risks, share feedback, and do their best work.
                </p>
              </div>
            </div>

            {/* Tools & Platforms - Title Right */}
            <div
              className="relative p-8 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-end"
              style={{
                backgroundImage: 'url(/images/skills/tools-platforms.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label="Communication Alignment - Professional Tools"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/70 to-black/40"></div>
              <div className="relative z-10 max-w-2xl text-right">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Communication | Alignment
                </h3>
                <p className="text-lg text-gray-100">
                  Over 10+ years in product management, I&apos;ve learned that even the best vision falls flat without clear communication and buy-in. I excel at and enjoy building alignment across cross-functional teams — translating product strategy into compelling narratives that inspire stakeholders, engineers, and designers to rally around a shared goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
