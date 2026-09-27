'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CATEGORIES = [
  'FinTech', 'HealthTech', 'EdTech', 'AI', 'SaaS', 'E-commerce', 'Web3', 'CleanTech',
  'PropTech', 'BioTech', 'AgriTech', 'SpaceTech', 'DeepTech', 'CyberSecurity',
  'Gaming', 'Logistics', 'Mobility', 'Renewable Energy', 'Robotics', 'AR/VR',
  'Consumer Social', 'Enterprise Software', 'Hardware', 'Marketplaces', 'D2C',
  'B2B', 'Climate Tech', 'LegalTech', 'InsurTech', 'FoodTech', 'HR Tech'
];

interface HeroSearchProps {
  onSearchComplete: (category: string, country: string) => void;
}

export default function HeroSearch({ onSearchComplete }: HeroSearchProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [category, setCategory] = useState('');
  const [targetCountry, setTargetCountry] = useState('');
  const [currentCountry, setCurrentCountry] = useState('Detecting...');
  const [isDetecting, setIsDetecting] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  // Fetch current country based on IP
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.country_name) {
          setCurrentCountry(data.country_name);
          setTargetCountry(data.country_name); // Auto-fill target country
        } else {
          throw new Error('No country');
        }
      } catch (err) {
        // Fallback
        try {
          const fbRes = await fetch('https://ipinfo.io/json');
          const fbData = await fbRes.json();
          if (fbData.country) {
            setCurrentCountry(fbData.country);
            setTargetCountry(fbData.country);
          } else {
            setCurrentCountry('Unknown Location');
          }
        } catch {
          setCurrentCountry('Unknown Location');
        }
      } finally {
        setIsDetecting(false);
      }
    };
    fetchLocation();
  }, []);

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim()) return;
    
    // Check if category exists (case insensitive)
    const matched = CATEGORIES.find(c => c.toLowerCase() === category.toLowerCase());
    if (matched || category.trim().length > 2) {
      // Transition to step 2
      setCategory(matched || category);
      
      gsap.to(step1Ref.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          setStep(2);
        }
      });
    }
  };

  const handleCountrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetCountry.trim()) return;
    
    // Finalize search
    onSearchComplete(category, targetCountry);
  };

  useGSAP(() => {
    if (step === 2 && step2Ref.current) {
      gsap.fromTo(step2Ref.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [step]);

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto relative z-10">
      {step === 1 && (
        <div ref={step1Ref} className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight text-center">
            Find the right investors for your startup.
          </h1>
          <p className="text-zinc-400 text-lg mb-8 text-center max-w-lg">
            Enter your industry to connect with local and global partners who understand your vision.
          </p>
          
          <form onSubmit={handleCategorySubmit} className="w-full relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full pl-11 pr-32 py-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
              placeholder="e.g., FinTech, HealthTech, AI..."
              required
            />
            <button
              type="submit"
              className="absolute inset-y-2 right-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer backdrop-blur-sm"
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div ref={step2Ref} className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
            Where are you looking for <span className="text-indigo-400">{category}</span> investors?
          </h2>
          
          <form onSubmit={handleCountrySubmit} className="w-full mt-8 relative flex flex-col md:flex-row gap-4">
            {/* Current Location Indicator */}
            <div className="flex-1 relative">
              <label className="absolute -top-6 left-2 text-xs text-zinc-400 font-medium uppercase tracking-wider">Your Location</label>
              <div className="flex items-center w-full px-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-zinc-300 backdrop-blur-sm">
                {isDetecting ? (
                  <Loader2 className="w-5 h-5 text-zinc-500 animate-spin mr-3" />
                ) : (
                  <MapPin className="w-5 h-5 text-indigo-500 mr-3" />
                )}
                <span>{currentCountry}</span>
              </div>
            </div>
            
            {/* Target Location Input */}
            <div className="flex-[2] relative">
              <label className="absolute -top-6 left-2 text-xs text-zinc-400 font-medium uppercase tracking-wider">Target Region</label>
              <div className="relative">
                <input
                  type="text"
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="block w-full pl-4 pr-32 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-[0_0_15px_rgba(79,70,229,0.1)] focus:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                  placeholder="Which country?"
                  required
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute inset-y-2 right-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors flex items-center gap-2"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          
          <button 
            type="button"
            onClick={() => setStep(1)}
            className="mt-8 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            ← Back to categories
          </button>
        </div>
      )}
    </div>
  );
}
