'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import HeroSearch from '@/components/HeroSearch';
import InvestorCard, { Investor } from '@/components/InvestorCard';
import KineticScroll from '@/components/KineticScroll';

// Dynamic import for Three.js component to avoid SSR issues
const Globe = dynamic(() => import('@/components/Globe'), { ssr: false });

const MOCK_INVESTORS: Investor[] = [
  { id: '1', name: 'Sarah Chen', photoUrl: 'https://i.pravatar.cc/400?img=47', title: 'Managing Partner @ Vertex Capital', netWorth: '$450M', investedStartups: ['Stripe', 'Plaid'], companies: ['Vertex Capital'], projects: ['FinTech Forward'], bio: 'Early-stage FinTech specialist.', category: 'FinTech', country: 'United States' },
  { id: '2', name: 'David Rosenberg', photoUrl: 'https://i.pravatar.cc/400?img=11', title: 'General Partner @ Horizon', netWorth: '$1.2B', investedStartups: ['Anthropic', 'Scale AI'], companies: ['Horizon Ventures'], projects: ['AI Safety Consortium'], bio: 'Focused on foundational AI models.', category: 'AI', country: 'United States' },
  { id: '3', name: 'Elena Rodriguez', photoUrl: 'https://i.pravatar.cc/400?img=5', title: 'Angel Investor', netWorth: '$210M', investedStartups: ['Oura', 'Whoop'], companies: ['HealthSync'], projects: ['BioHackers Lab'], bio: 'Deploying capital into preventative health.', category: 'HealthTech', country: 'Spain' },
  { id: '4', name: 'Marcus Thorne', photoUrl: 'https://i.pravatar.cc/400?img=33', title: 'Partner @ ClimateFund', netWorth: '$320M', investedStartups: ['Northvolt'], companies: ['ClimateFund'], projects: ['Ocean Cleanup'], bio: 'Deep tech and climate focus.', category: 'CleanTech', country: 'United Kingdom' },
  { id: '5', name: 'Amir Patel', photoUrl: 'https://i.pravatar.cc/400?img=12', title: 'MD @ Enterprise Scale', netWorth: '$850M', investedStartups: ['Snowflake', 'Datadog'], companies: ['Enterprise Scale'], projects: ['SaaS Growth'], bio: 'B2B SaaS expert.', category: 'SaaS', country: 'Canada' },
  { id: '6', name: 'Jessica Lin', photoUrl: 'https://i.pravatar.cc/400?img=9', title: 'Founder @ EduVentures', netWorth: '$150M', investedStartups: ['Coursera', 'MasterClass'], companies: ['EduVentures'], projects: ['Global Learning Init'], bio: 'Passionate about democratizing education.', category: 'EdTech', country: 'United States' },
  { id: '7', name: 'Thomas Mueller', photoUrl: 'https://i.pravatar.cc/400?img=15', title: 'Partner @ Autobahn Capital', netWorth: '$500M', investedStartups: ['Lilium', 'Tier'], companies: ['Autobahn'], projects: ['Future Mobility'], bio: 'Mobility and automotive tech investor.', category: 'Mobility', country: 'Germany' },
  { id: '8', name: 'Sophie Laurent', photoUrl: 'https://i.pravatar.cc/400?img=16', title: 'Director @ FashionTech', netWorth: '$200M', investedStartups: ['Farfetch', 'Vinted'], companies: ['Style Invest'], projects: ['Circular Economy'], bio: 'Investing in the intersection of fashion and tech.', category: 'E-commerce', country: 'France' },
  { id: '9', name: 'Kenji Sato', photoUrl: 'https://i.pravatar.cc/400?img=18', title: 'Principal @ NeoTokyo Fund', netWorth: '$600M', investedStartups: ['Sorare', 'Axie Infinity'], companies: ['NeoTokyo'], projects: ['Web3 Gaming'], bio: 'Web3 and crypto gaming enthusiast.', category: 'Web3', country: 'Japan' },
  { id: '10', name: 'Anita Desai', photoUrl: 'https://i.pravatar.cc/400?img=20', title: 'General Partner @ Agrarian', netWorth: '$180M', investedStartups: ['DeHaat', 'Ninjacart'], companies: ['Agrarian Ventures'], projects: ['Sustainable Farming'], bio: 'Focusing on supply chain and agritech.', category: 'AgriTech', country: 'India' },
  { id: '11', name: 'James Wilson', photoUrl: 'https://i.pravatar.cc/400?img=50', title: 'Managing Director', netWorth: '$300M', investedStartups: ['Coinbase', 'Kraken'], companies: ['BlockCapital'], projects: ['DeFi Future'], bio: 'Early believer in decentralized finance.', category: 'FinTech', country: 'United Kingdom' },
  { id: '12', name: 'Maria Garcia', photoUrl: 'https://i.pravatar.cc/400?img=42', title: 'Angel Investor', netWorth: '$120M', investedStartups: ['Duolingo'], companies: ['Language Tech Fund'], projects: ['EdTech LATAM'], bio: 'EdTech investments in Latin America.', category: 'EdTech', country: 'Mexico' },
  { id: '13', name: 'Wei Chen', photoUrl: 'https://i.pravatar.cc/400?img=13', title: 'Partner @ Dragon Fund', netWorth: '$900M', investedStartups: ['Shein', 'Temu'], companies: ['Dragon Fund'], projects: ['Global Commerce'], bio: 'Cross-border E-commerce scale-ups.', category: 'E-commerce', country: 'China' },
  { id: '14', name: 'Oliver Smith', photoUrl: 'https://i.pravatar.cc/400?img=14', title: 'VP @ CloudNine', netWorth: '$400M', investedStartups: ['Vercel', 'Supabase'], companies: ['CloudNine Ventures'], projects: ['DevTools Init'], bio: 'SaaS and Developer Tools focus.', category: 'SaaS', country: 'United States' },
  { id: '15', name: 'Fatima Al-Fayed', photoUrl: 'https://i.pravatar.cc/400?img=24', title: 'Director @ Desert Rose', netWorth: '$2.5B', investedStartups: ['Careem', 'Kitopi'], companies: ['Desert Rose Capital'], projects: ['MENA Tech Growth'], bio: 'Scaling MENA region startups.', category: 'FoodTech', country: 'United Arab Emirates' },
  { id: '16', name: 'Carlos Santos', photoUrl: 'https://i.pravatar.cc/400?img=25', title: 'Partner @ Green Earth', netWorth: '$350M', investedStartups: ['NotCo'], companies: ['Green Earth'], projects: ['Plant-based Future'], bio: 'Sustainable food and clean tech.', category: 'CleanTech', country: 'Brazil' },
  { id: '17', name: 'Anna Kowalski', photoUrl: 'https://i.pravatar.cc/400?img=26', title: 'Principal @ CyberSec Fund', netWorth: '$280M', investedStartups: ['CrowdStrike', 'Wiz'], companies: ['CyberSec Fund'], projects: ['Zero Trust Network'], bio: 'Deep tech and cybersecurity expert.', category: 'CyberSecurity', country: 'Poland' },
  { id: '18', name: 'Michael Chang', photoUrl: 'https://i.pravatar.cc/400?img=27', title: 'General Partner @ MedTech', netWorth: '$550M', investedStartups: ['Tempus', 'Ro'], companies: ['MedTech Ventures'], projects: ['Digital Health'], bio: 'Investing in the future of healthcare.', category: 'HealthTech', country: 'United States' },
  { id: '19', name: 'Lars Nielsen', photoUrl: 'https://i.pravatar.cc/400?img=28', title: 'MD @ Nordic Games', netWorth: '$420M', investedStartups: ['Supercell', 'Unity'], companies: ['Nordic Games Fund'], projects: ['Mobile Gaming'], bio: 'Gaming and interactive media investor.', category: 'Gaming', country: 'Sweden' },
  { id: '20', name: 'Rachel Green', photoUrl: 'https://i.pravatar.cc/400?img=29', title: 'Angel Investor', netWorth: '$90M', investedStartups: ['Glossier', 'Away'], companies: ['Consumer First'], projects: ['D2C Brands'], bio: 'Consumer social and D2C brands.', category: 'D2C', country: 'United States' },
];

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [investors, setInvestors] = useState<Investor[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearchComplete = (category: string, country: string) => {
    // Filter MOCK_INVESTORS dynamically
    let filtered = MOCK_INVESTORS;
    
    if (category) {
      filtered = filtered.filter(inv => inv.category.toLowerCase().includes(category.toLowerCase()));
    }
    
    // Exact or partial match on country
    if (country) {
      filtered = filtered.filter(inv => inv.country.toLowerCase().includes(country.toLowerCase()));
    }
    
    // If no exact matches are found, gracefully fallback to investors in the same category regardless of country,
    // or just return some default ones so the UI isn't empty for the demo.
    if (filtered.length === 0 && category) {
      filtered = MOCK_INVESTORS.filter(inv => inv.category.toLowerCase().includes(category.toLowerCase()));
    }
    
    // If still empty, return some random investors for demo purposes
    if (filtered.length === 0) {
      filtered = [...MOCK_INVESTORS].sort(() => 0.5 - Math.random()).slice(0, 5);
    }

    setInvestors(filtered);
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
