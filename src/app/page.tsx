'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import HeroSearch from '@/components/HeroSearch';
import InvestorCard, { Investor } from '@/components/InvestorCard';
import KineticScroll from '@/components/KineticScroll';

// Dynamic import for Three.js component to avoid SSR issues
const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });

const MOCK_INVESTORS: Investor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    photoUrl: 'https://i.pravatar.cc/400?img=47',
    title: 'Managing Partner @ Vertex Capital',
    netWorth: '$450M',
    investedStartups: ['Stripe', 'Plaid', 'Brex', 'Ramp'],
    companies: ['Vertex Capital'],
    projects: ['FinTech Forward Initiative', 'Women in Tech Fund'],
    bio: 'Early-stage FinTech specialist with a track record of identifying category-defining payment solutions before they break out.'
  },
  {
    id: '2',
    name: 'David Rosenberg',
    photoUrl: 'https://i.pravatar.cc/400?img=11',
    title: 'General Partner @ Horizon Ventures',
    netWorth: '$1.2B',
    investedStartups: ['Anthropic', 'Scale AI', 'Hugging Face'],
    companies: ['Horizon Ventures', 'DataCorp'],
    projects: ['AI Safety Consortium'],
    bio: 'Focused on foundational AI models and tooling. Looking for teams combining deep technical moats with clear go-to-market strategies.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    photoUrl: 'https://i.pravatar.cc/400?img=5',
    title: 'Angel Investor / Ex-Founder',
    netWorth: '$210M',
    investedStartups: ['Oura', 'Whoop', 'Levels'],
    companies: ['HealthSync (Acquired)'],
    projects: ['BioHackers Lab'],
    bio: 'Former HealthTech founder who exited for $800M. Now deploying capital into preventative health and wearable technology.'
  },
  {
    id: '4',
    name: 'Marcus Thorne',
    photoUrl: 'https://i.pravatar.cc/400?img=33',
    title: 'Partner @ ClimateFund',
    netWorth: '$320M',
    investedStartups: ['Northvolt', 'Redwood Materials'],
    companies: ['ClimateFund'],
    projects: ['Ocean Cleanup', 'Grid Modernization Taskforce'],
    bio: 'Deep tech and climate focus. Patient capital for hardware-heavy solutions to global environmental challenges.'
  },
  {
    id: '5',
    name: 'Amir Patel',
    photoUrl: 'https://i.pravatar.cc/400?img=12',
    title: 'Managing Director @ Enterprise Scale',
    netWorth: '$850M',
    investedStartups: ['Snowflake', 'Datadog', 'Figma'],
    companies: ['Enterprise Scale', 'CloudSec'],
    projects: ['SaaS Growth Accelerator'],
    bio: 'B2B SaaS expert. Hands-on investor helping companies scale from $1M to $100M ARR through enterprise sales.'
  }
];

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [investors, setInvestors] = useState<Investor[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearchComplete = () => {
    // In a real app, this would fetch from an API based on category/country
    // For now, we simulate a search and use the mock data
    setInvestors(MOCK_INVESTORS);
    setHasSearched(true);
    
    // Scroll to results smoothly after a short delay to allow rendering
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Globe />
        
        {/* Content Overlay */}
        <HeroSearch onSearchComplete={handleSearchComplete} />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-pulse">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Results Section */}
      <div ref={resultsRef}>
        {hasSearched ? (
          <KineticScroll>
            {investors.map((investor) => (
              <InvestorCard key={investor.id} investor={investor} />
            ))}
            {/* End padding card to ensure smooth scroll end */}
            <div className="w-[100px] h-[550px] shrink-0" aria-hidden="true" />
          </KineticScroll>
        ) : (
          <section className="min-h-[50vh] flex items-center justify-center bg-zinc-950 border-t border-zinc-900">
            <div className="text-center p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50 backdrop-blur-sm max-w-md">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 border-2 border-zinc-600 border-t-indigo-500 rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Awaiting your search</h3>
              <p className="text-zinc-400">Complete the steps above to find matched investors in your industry and region.</p>
            </div>
          </section>
        )}
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 bg-black text-center text-zinc-500 text-sm">
        <p>&copy; 2026 FoundersMatch. All rights reserved.</p>
      </footer>
    </main>
  );
}
