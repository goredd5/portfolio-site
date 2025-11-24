'use client';

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export default function About() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My Background & Experience
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hello! 👋
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I&apos;m a New Jersey native and Rutgers grad who started my career in government, where identifying and solving customer pain points became a passion and led me to seek out environments where I could have a greater positive impact. For the past 10+ years, I&apos;ve been driving that impact at startups—building products that have generated over $175M in revenue, scaled to 30M+ active users, and contributed to $12B+ in GMV
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              My work is guided by three core principles: be curious and kind, ship fast, learn faster and validate with data, not opinions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I bring deep technical expertise in software testing and release management, combined with a strong focus on behavioral analytics, catalog attribution, and integrations. This blend allows me to build scalable, customer-centric products for both B2B and DTC markets.
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
                Product Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Building Vision, Strategy and Tactics', 'Roadmapping', 'Prioritization Exercises', 'Discovery & Insights', 'User Research'].map((skill) => (
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
                Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Rest APIs', 'Cloud Infrastructure',  'CI/CD','Testing & Automation', 'Javascript', 'HTML/CSS', 'Claude Code','Python', 'Git', 'Unix/Linux'].map((skill) => (
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
                Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Insight Dashboard Building','A/B testing', 'Behavioral Analytics', 'Data Strategy & Design', 'Metabase','Data Models','Machine Learning'].map((skill) => (
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
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'Contentful', 'Shopify', 'Stripe','Twillio','Algolia', 'Rudderstack',  'Hotjar', 'Mixpanel', 'Postman','Retool', 'Replit'].map((skill) => (
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
            Career Highlights
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                JOOPITER |  Auction & E-Commerce Marketplace
              </h3>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2">
                Head of Product
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Feb 2024 - Nov 2025
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Directed end-to-end product, QA, and engineering development to re-launch JOOPITER.com, driving revenue growth in first year through strategic execution including optimization of catalogs, event attribution and internal automation tools to drive performance.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Launched the JOOPITER resale marketplace, leveraging AI-powered search, discovery, and recommendation systems to improve user engagement.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Stadium Goods | E-Commerce Marketplace
              </h3>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2">
                Director of Product
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Feb 2020 Mar 2023
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Stadium Goods</p>
              <p className="text-gray-700 dark:text-gray-300">
                Led an 8 person product and QA team, developing strategy and driving results across Web/App & Data/ML initiatives. Achieved 6x growth to e-commerce revenue ($150M) and active users (30M).
              </p>
               <h3 className="text-l font-bold text-gray-900 dark:text-white mb-2 mt-5">
                Senior Product Manager
              </h3>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Dec 2018 Feb 2020
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Product lead to a 4 person software development team optimizing REST API integrations with 3rd party platforms, reducing return rate by 15% through improved catalog accuracy.
                <br/><br/>
                Integrated with Stripe marketplace payment platform to automate seller payouts and invoicing, reducing time to pay and improving seller CSAT by 40%
                <br/><br/>
                Owned development of new dropship platform, onboarding 10 seller catalogs in 2019, driving $8M in revenue.  
              </p>

            </div>
       
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                JOOR | SaaS B2B Platform
              </h3>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2">
                Director of Product (Product, QA & Customer-facing integrations)
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Jun 2014 to Jul 2018
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">JOOR, Inc</p>
              <p className="text-gray-700 dark:text-gray-300">
               Hired and led a 10 person product team, scaling to over 12B in GMV and $25M in revenue through focus on Enterprise, SMB and International business growth.
               <br/>
               <br/>
               Hired and led 2 person product support team responsible for improving platform adoption by 10% through documentation, webinars and chat support.
               <br/>
               <br/>
               Hired and led a 3 person solutions team to scale customer integration capabilities, providing technical onboarding support and working directly with customers during onboarding.
              </p>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2 mt-5">
                Product Manager and QA Engineer
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Sep 2012 to Jun 2014
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">JOOR, Inc</p>
              <p className="text-gray-700 dark:text-gray-300">
               Hired and led a 10 person product team, scaling to over 12B in GMV and $25M in revenue through focus on Enterprise, SMB and International business growth.
               <br/>
               <br/>
               Hired and led 2 person product support team responsible for improving platform adoption by 10% through documentation, webinars and chat support.
               <br/>
               <br/>
               Hired and led a 3 person solutions team to scale customer integration capabilities, providing technical onboarding support and working directly with customers during onboarding.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Grubhub | Online Food Platform
              </h3>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2">
                QA Engineer
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Mar 2012 to Sept 2012
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Stadium Goods</p>
              <p className="text-gray-700 dark:text-gray-300">
                Led an 8 person product and QA team, developing strategy and driving results across Web/App & Data/ML initiatives. Achieved 6x growth to e-commerce revenue ($150M) and active users (30M).
              </p>
               

            </div>
          </div>
          
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 mt-10">
            Education
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Rutgers University - Newark, NJ
              </h3>
              <h4 className="text-l font-bold text-gray-900 dark:text-white mb-2">
                Information Systems
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                2001
              </div>
              
            </div>


          </div>

        </section>

        {/* Get In Touch */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Whether you&apos;re looking for strategic product leadership, technical expertise, or someone to help scale your organization, I&apos;d love to hear about your vision. Let&apos;s connect and explore how we can create impact together.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get In Touch
          </button>
        </section>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
