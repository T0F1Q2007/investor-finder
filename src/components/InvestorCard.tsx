import React from 'react';
import Image from 'next/image';
import { Building2, Briefcase, DollarSign, ChevronRight } from 'lucide-react';

export interface Investor {
  id: string;
  name: string;
  photoUrl: string;
  title: string;
  netWorth: string;
  investedStartups: string[];
  companies: string[];
  projects: string[];
  bio: string;
}

interface InvestorCardProps {
  investor: Investor;
}

export default function InvestorCard({ investor }: InvestorCardProps) {
  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[550px] transition-transform hover:border-zinc-700 relative group">
      
      {/* Photo header */}
      <div className="h-48 relative overflow-hidden bg-zinc-800">
        {/* We use a placeholder image service for the mock photos */}
        <Image 
          src={investor.photoUrl} 
          alt={investor.name}
          fill
          sizes="(max-width: 768px) 350px, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        
        <div className="absolute bottom-4 left-6">
          <h3 className="text-2xl font-bold text-white">{investor.name}</h3>
          <p className="text-indigo-400 font-medium">{investor.title}</p>
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 flex flex-col flex-grow bg-zinc-900 z-10">
        <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
          {investor.bio}
        </p>
        
        <div className="space-y-4 flex-grow">
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Net Worth</p>
              <p className="text-zinc-200">{investor.netWorth}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Key Startups</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {investor.investedStartups.map(startup => (
                  <span key={startup} className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/20">
                    {startup}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Companies / Projects</p>
              <p className="text-zinc-300 text-sm leading-relaxed mt-1">
                {[...investor.companies, ...investor.projects].slice(0, 3).join(', ')}
                {([...investor.companies, ...investor.projects].length > 3) && ' + more'}
              </p>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
          View Full Profile <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
